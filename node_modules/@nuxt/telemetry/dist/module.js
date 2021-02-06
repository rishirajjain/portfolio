'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var destr = _interopDefault(require('destr'));
var nanoid = require('nanoid');
var rc = require('rc9');
var fetch = _interopDefault(require('node-fetch'));
var meta = require('./meta-73536716.js');
var path = require('path');
var path__default = _interopDefault(path);
var fs = require('fs');
var createRequire = _interopDefault(require('create-require'));
var os = _interopDefault(require('os'));
var gitUrlParse = _interopDefault(require('git-url-parse'));
var parseGitConfig = _interopDefault(require('parse-git-config'));
var isDocker = _interopDefault(require('is-docker'));
var ci = _interopDefault(require('ci-info'));
var fs$1 = _interopDefault(require('fs-extra'));
var crypto = require('crypto');
var consola = _interopDefault(require('consola'));
var c = _interopDefault(require('chalk'));
var inquirer = _interopDefault(require('inquirer'));
var stdEnv = _interopDefault(require('std-env'));

var name = "@nuxt/telemetry";
var version = "1.2.3";

function updateUserNuxtRc(key, val) {
  rc.updateUser({
    [key]: val
  }, '.nuxtrc');
}

async function postEvent(endpoint, body) {
  const res = await fetch(endpoint, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
      'user-agent': 'Nuxt Telemetry ' + version
    },
    timeout: 4000 // Important: should be less than 5 seconds for prod

  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }
}

const build = function ({
  nuxt
}, payload) {
  const duration = {
    build: payload.duration.build
  }; // const size = {}

  let isSuccess = true;

  for (const [name, stat] of Object.entries(payload.stats)) {
    duration[name] = stat.duration; // size[name] = stat.size

    if (!stat.success) {
      isSuccess = false;
    }
  }

  return {
    name: 'build',
    isSuccess,
    isDev: nuxt.options.dev || false,
    duration // size

  };
};

const command = function ({
  nuxt
}) {
  let command = 'unknown';
  const flagMap = {
    dev: 'dev',
    _generate: 'generate',
    _export: 'export',
    _build: 'build',
    _serve: 'serve',
    _start: 'start'
  };

  for (const flag in flagMap) {
    if (nuxt.options[flag]) {
      command = flagMap[flag];
      break;
    }
  }

  return {
    name: 'command',
    command
  };
};

const generate = function generate({
  nuxt
}, payload) {
  return {
    name: 'generate',
    isExport: !!nuxt.options._export,
    routesCount: payload.routesCount,
    duration: {
      generate: payload.duration.generate
    }
  };
};

const dependency = function ({
  nuxt: {
    options
  }
}) {
  const events = [];
  const projectDeps = getDependencies(options.rootDir); // Get used modules and buildModules

  const modules = normalizeModules(options.modules);
  const buildModules = normalizeModules(options.buildModules); // Only send event for relevant dependencies

  const relatedDeps = [...modules, ...buildModules];

  for (const dep of projectDeps) {
    if (!relatedDeps.includes(dep.name)) {
      continue;
    }

    events.push({
      name: 'dependency',
      packageName: dep.name,
      version: dep.version,
      isDevDependency: dep.dev,
      isModule: modules.includes(dep.name),
      isBuildModule: buildModules.includes(dep.name)
    });
  }

  return events;
};

function normalizeModules(modules) {
  return modules.map(m => {
    if (typeof m === 'string') {
      return m;
    }

    if (Array.isArray(m) && typeof m[0] === 'string') {
      return m[0];
    }
  }).filter(Boolean);
}

function getDependencies(rootDir) {
  const pkgPath = path.join(rootDir, 'package.json');

  if (!fs.existsSync(pkgPath)) {
    return [];
  }

  const _require = createRequire(rootDir);

  const pkg = _require(pkgPath);

  const mapDeps = (depsObj, dev = false) => {
    const _deps = [];

    for (const name in depsObj) {
      try {
        const pkg = _require(path.join(name, 'package.json'));

        _deps.push({
          name,
          version: pkg.version,
          dev
        });
      } catch (_e) {
        // Dependency is not installed
        _deps.push({
          name,
          version: depsObj[name],
          dev
        });
      }
    }

    return _deps;
  };

  const deps = [];

  if (pkg.dependencies) {
    deps.push(...mapDeps(pkg.dependencies));
  }

  if (pkg.devDependencies) {
    deps.push(...mapDeps(pkg.dependencies, true));
  }

  return deps;
}

const project = function (context) {
  const {
    options
  } = context.nuxt;
  return {
    name: 'project',
    type: context.git && context.git.url ? 'git' : 'local',
    isSSR: options.mode === 'universal' || options.ssr === true,
    target: options._generate ? 'static' : 'server',
    packageManager: context.packageManager
  };
};

const session = function ({
  seed
}) {
  return {
    name: 'session',
    id: seed
  };
};

var events = /*#__PURE__*/Object.freeze({
  __proto__: null,
  build: build,
  command: command,
  generate: generate,
  dependency: dependency,
  getDependencies: getDependencies,
  project: project,
  session: session
});

const FILE2PM = {
  'yarn.lock': 'yarn',
  'package-lock.json': 'npm',
  'shrinkwrap.json': 'npm'
};
async function detectPackageManager(rootDir) {
  for (const file in FILE2PM) {
    if (await fs$1.pathExists(path__default.resolve(rootDir, file))) {
      // @ts-ignore
      return FILE2PM[file];
    }
  }

  return 'unknown';
}

function hash(str) {
  return crypto.createHash('sha256').update(str).digest('hex').substr(0, 16);
}

async function createContext(nuxt, options) {
  const rootDir = nuxt.options.rootDir || process.cwd();
  const git = await getGit(rootDir);
  const packageManager = await detectPackageManager(rootDir);
  const {
    seed
  } = options;
  const projectHash = await getProjectHash(rootDir, git, seed);
  const projectSession = getProjectSession(projectHash, seed);
  const nuxtVersion = (nuxt.constructor.version || '').replace('v', '');
  const nodeVersion = process.version.replace('v', '');
  const isEdge = nuxtVersion.includes('-');
  return {
    nuxt,
    seed,
    git,
    projectHash,
    projectSession,
    nuxtVersion,
    isEdge,
    cli: getCLI(),
    nodeVersion,
    os: os.type().toLocaleLowerCase(),
    environment: getEnv(),
    packageManager
  };
}

function getEnv() {
  if (process.env.CODESANDBOX_SSE) {
    return 'CSB';
  }

  if (ci.isCI) {
    return ci.name;
  }

  if (isDocker()) {
    return 'Docker';
  }

  return 'unknown';
}

function getCLI() {
  const entry = require.main.filename;
  const knownCLIs = {
    'nuxt-ts.js': 'nuxt-ts',
    'nuxt-start.js': 'nuxt-start',
    'nuxt.js': 'nuxt'
  };

  for (const key in knownCLIs) {
    if (entry.includes(key)) {
      const edge = entry.includes('-edge') ? '-edge' : '';
      return knownCLIs[key] + edge;
    }
  }

  return 'programmatic';
}

function getProjectSession(projectHash, sessionId) {
  return hash(`${projectHash}#${sessionId}`);
}

function getProjectHash(rootDir, git, seed) {
  let id;

  if (git && git.url) {
    id = `${git.source}#${git.owner}#${git.name}`;
  } else {
    id = `${rootDir}#${seed}`;
  }

  return hash(id);
}

async function getGitRemote(rootDir) {
  try {
    const parsed = await parseGitConfig({
      cwd: rootDir
    });

    if (parsed) {
      const gitRemote = parsed['remote "origin"'].url;
      return gitRemote;
    }

    return null;
  } catch (err) {
    return null;
  }
}

async function getGit(rootDir) {
  const gitRemote = await getGitRemote(rootDir);

  if (!gitRemote) {
    return;
  }

  const meta = gitUrlParse(gitRemote);
  const url = meta.toString('https');
  return {
    url,
    gitRemote,
    source: meta.source,
    owner: meta.owner,
    name: meta.name
  };
}

var log = consola.withScope('@nuxt/telemetry');

class Telemetry {
  constructor(nuxt, options) {
    this.events = [];
    this.nuxt = nuxt;
    this.options = options;
  }

  getContext() {
    if (!this._contextPromise) {
      this._contextPromise = createContext(this.nuxt, this.options);
    }

    return this._contextPromise;
  }

  createEvent(name, payload) {
    // @ts-ignore
    const eventFactory = events[name];

    if (typeof eventFactory !== 'function') {
      log.warn('Unknown event:', name);
      return;
    }

    const eventPromise = this._invokeEvent(name, eventFactory, payload);

    this.events.push(eventPromise);
  }

  async _invokeEvent(name, eventFactory, payload) {
    try {
      const context = await this.getContext();
      const event = await eventFactory(context, payload);
      event.name = name;
      return event;
    } catch (err) {
      log.error('Error while running event:', err);
    }
  }

  async getPublicContext() {
    const context = await this.getContext();
    const eventContext = {};

    for (const key of ['nuxtVersion', 'isEdge', 'nodeVersion', 'cli', 'os', 'environment', 'projectHash', 'projectSession']) {
      eventContext[key] = context[key];
    }

    return eventContext;
  }

  async sendEvents() {
    const events = [].concat(...(await Promise.all(this.events)).filter(Boolean));
    this.events = [];
    const context = await this.getPublicContext();
    const body = {
      timestamp: Date.now(),
      context,
      events
    };

    if (this.options.endpoint) {
      const start = Date.now();

      try {
        log.info('Sending events:', JSON.stringify(body, null, 2));
        await postEvent(this.options.endpoint, body);
        log.success(`Events sent to \`${this.options.endpoint}\` (${Date.now() - start} ms)`);
      } catch (err) {
        log.error(`Error sending sent to \`${this.options.endpoint}\` (${Date.now() - start} ms)\n`, err);
      }
    }
  }

}

function getStats(stats) {
  const duration = stats.endTime - stats.startTime;
  return {
    duration,
    success: stats.compilation.errors.length === 0,
    size: 0,
    fullHash: stats.compilation.fullHash
  };
}

async function ensureUserconsent(options) {
  if (options.consent >= meta.consentVersion || stdEnv.minimal || process.env.CODESANDBOX_SSE || isDocker()) {
    return true;
  }

  process.stdout.write('\n');
  consola.info(`${c.green('NuxtJS')} collects completely anonymous data about usage.
  This will help us improving Nuxt developer experience over the time.
  Read more on ${c.cyan.underline('https://git.io/nuxt-telemetry')}\n`);
  const {
    accept
  } = await inquirer.prompt({
    type: 'confirm',
    name: 'accept',
    message: 'Are you interested in participation?'
  });
  process.stdout.write('\n');

  if (accept) {
    updateUserNuxtRc('telemetry.consent', meta.consentVersion);
    updateUserNuxtRc('telemetry.enabled', true);
    return true;
  }

  updateUserNuxtRc('telemetry.enabled', false);
  return false;
}

async function _telemetryModule(nuxt) {
  const toptions = {
    endpoint: destr(process.env.NUXT_TELEMETRY_ENDPOINT) || 'https://telemetry.nuxtjs.com',
    debug: destr(process.env.NUXT_TELEMETRY_DEBUG),
    ...nuxt.options.telemetry
  };

  if (!toptions.debug) {
    log.level = -Infinity;
  }

  if (nuxt.options.telemetry !== true) {
    if (toptions.enabled === false || nuxt.options.telemetry === false || !(await ensureUserconsent(toptions))) {
      log.info('Telemetry disabled');
      return;
    }
  }

  log.info('Telemetry enabled');

  if (!toptions.seed) {
    toptions.seed = hash(nanoid.nanoid());
    updateUserNuxtRc('telemetry.seed', toptions.seed);
    log.info('Seed generated:', toptions.seed);
  }

  const t = new Telemetry(nuxt, toptions);

  if (nuxt.options._start) {
    // nuxt start
    nuxt.hook('listen', () => {
      t.createEvent('project');
      t.createEvent('session');
      t.createEvent('command');
      t.sendEvents();
    });
  }

  nuxt.hook('build:before', () => {
    t.createEvent('project');
    t.createEvent('session');
    t.createEvent('command');
    t.createEvent('dependency');
  });
  profile(nuxt, t);
}

async function telemetryModule() {
  try {
    await _telemetryModule(this.nuxt);
  } catch (err) {
    log.error(err);
  }
}

function profile(nuxt, t) {
  const startT = {};
  const duration = {};
  const stats = {};
  let routesCount = 0;

  const timeStart = name => {
    startT[name] = Date.now();
  };

  const timeEnd = name => {
    duration[name] = Date.now() - startT[name];
  }; // Total build timing


  nuxt.hook('build:before', () => {
    timeStart('build');
  });
  nuxt.hook('build:done', () => {
    timeEnd('build');
  });
  nuxt.hook('build:compiled', ({
    name,
    stats: _stats
  }) => {
    // @ts-ignore
    stats[name] = getStats(_stats);
  }); // Generate timing
  // TODO: workaround as generate:before is before build

  nuxt.hook('generate:extendRoutes', () => timeStart('generate'));
  nuxt.hook('generate:routeCreated', () => {
    routesCount++;
  });
  nuxt.hook('generate:done', () => {
    timeEnd('generate'); // nuxt generate or nuxt export

    t.createEvent('generate', {
      duration,
      stats,
      routesCount
    });
    t.sendEvents();
  }); // Report build time

  nuxt.hook('build:done', () => {
    // nuxt build or nuxt dev
    t.createEvent('build', {
      duration,
      stats
    });
    t.sendEvents();
  });
}

telemetryModule.meta = {
  name,
  version
};

module.exports = telemetryModule;
