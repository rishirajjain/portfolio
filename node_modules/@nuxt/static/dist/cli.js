'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fs = require('fs');
var fs__default = _interopDefault(fs);
var path = require('path');
var path__default = _interopDefault(path);
var _consola = _interopDefault(require('consola'));
var destr = _interopDefault(require('destr'));
var defu = _interopDefault(require('defu'));
var crc32 = _interopDefault(require('crc/lib/crc32'));
var globby = _interopDefault(require('globby'));

function compareSnapshots(from, to) {
  const allKeys = Array.from(new Set([...Object.keys(from).sort(), ...Object.keys(to).sort()])); // const fromKeys = Object.keys(from).sort()
  // const toKeys = Object.keys(to).sort()
  // if (fromKeys.length !== toKeys.length || JSON.stringify(fromKeys) !== JSON.stringify(toKeys)) {
  //   return true
  // }

  for (const key of allKeys) {
    if (JSON.stringify(from[key]) !== JSON.stringify(to[key])) {
      return key;
    }
  }

  return false;
}
async function snapshot({
  globbyOptions,
  ignore,
  rootDir
}) {
  const snapshot = {};
  const files = await globby('**/*.*', { ...globbyOptions,
    ignore,
    cwd: rootDir,
    absolute: true
  });
  await Promise.all(files.map(async p => {
    const key = path.relative(rootDir, p);

    try {
      const fileContent = await fs.promises.readFile(p);
      snapshot[key] = {
        checksum: await crc32(fileContent).toString(16)
      };
    } catch (e) {
      // TODO: Check for other errors like permission denied
      snapshot[key] = {
        exists: false
      };
    }
  }));
  return snapshot;
}

function requireMaybeEdge(pkg) {
  return tryRequire(pkg + '-edge') || tryRequire(pkg);
}
function tryRequire(pkg) {
  try {
    return require(pkg);
  } catch (_e) {}
}

const logger = _consola.withTag('nuxt-static');

async function main() {
  const {
    NuxtCommand,
    setup
  } = requireMaybeEdge('@nuxt/cli');

  const isFullStatic = config => config.target === 'static'; // In case we run nuxt-static command directly


  setup({
    dev: false
  });
  await NuxtCommand.run({
    name: 'static',
    description: '',
    usage: 'static <dir>',
    options: {},

    async run(cmd) {
      async function getNuxt(flags) {
        const config = await cmd.getNuxtConfig({
          dev: false,
          ...flags
        });

        if (isFullStatic(config)) {
          config._export = true;
        } else {
          config._legacyGenerate = true;
        }

        config.buildDir = config.static && config.static.cacheDir || path__default.resolve(config.rootDir, 'node_modules/.cache/nuxt');
        const nuxt = await cmd.getNuxt(config);
        return nuxt;
      }

      await this.ensureBuild({
        cmd,
        getNuxt
      });
      await this.generate({
        cmd,
        getNuxt
      });
    },

    async generate({
      cmd,
      getNuxt
    }) {
      const nuxt = await getNuxt({
        server: true
      });
      const generator = await cmd.getGenerator(nuxt);
      generator.isFullStatic = isFullStatic(nuxt.options);

      generator.initiate = async () => {
        await nuxt.callHook('generate:before', generator, generator.options.generate);
        await nuxt.callHook('export:before', generator);
        await generator.initDist();
      };

      await nuxt.server.listen(0);
      await generator.generate();
      await nuxt.close();
    },

    async ensureBuild({
      cmd,
      getNuxt
    }) {
      const nuxt = await getNuxt({
        _build: true,
        server: false
      });
      nuxt.options.static = nuxt.options.static || {};
      const staticOptions = defu(nuxt.options.static, {
        globbyOptions: {
          gitignore: true
        }
      });
      staticOptions.ignore = [nuxt.options.buildDir, nuxt.options.dir.static, nuxt.options.generate.dir, 'node_modules', 'content', '.**/*', '.*', 'README.md'];

      if (typeof nuxt.options.static.ignore === 'function') {
        staticOptions.ignore = nuxt.options.static.ignore(staticOptions.ignore);
      } else if (Array.isArray(nuxt.options.static.ignore)) {
        staticOptions.ignore = staticOptions.ignore.concat(nuxt.options.static.ignore);
      }

      await nuxt.callHook('static:ignore', staticOptions.ignore); // Take a snapshot of current project

      const snapshotOptions = {
        rootDir: nuxt.options.rootDir,
        ignore: staticOptions.ignore,
        globbyOptions: staticOptions.globbyOptions
      };
      const currentBuildSnapshot = await snapshot(snapshotOptions); // Current build meta

      const currentBuild = {
        // @ts-ignore
        nuxtVersion: nuxt.constructor.version,
        ssr: nuxt.options.ssr,
        target: nuxt.options.target,
        snapshot: currentBuildSnapshot
      }; // Check if build can be skipped

      const nuxtBuildFile = path__default.resolve(nuxt.options.buildDir, 'build.json');

      if (fs__default.existsSync(nuxtBuildFile)) {
        const previousBuild = destr(fs__default.readFileSync(nuxtBuildFile, 'utf-8')) || {}; // Quick diff

        for (const field of ['nuxtVersion', 'ssr', 'target']) {
          if (previousBuild[field] !== currentBuild[field]) {
            logger.info(`Doing webpack rebuild because ${field} changed`);
            break;
          }
        } // Full snapshot diff


        {
          const changed = compareSnapshots(previousBuild.snapshot, currentBuild.snapshot);

          if (!changed) {
            logger.success('Skipping webpack build as no changes detected');
            return;
          } else {
            logger.info(`Doing webpack rebuild because ${changed} modified`);
          }
        }
      } // Webpack build


      const builder = await cmd.getBuilder(nuxt);
      await builder.build(); // Write build.json

      fs__default.writeFileSync(nuxtBuildFile, JSON.stringify(currentBuild, null, 2), 'utf-8');
      await nuxt.close();
    }

  });
}

main().catch(err => {
  logger.error(err);
  process.exit(1);
});
