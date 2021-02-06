'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var destr = _interopDefault(require('destr'));
var rc = require('rc9');
var meta = require('./meta-73536716.js');
var path = require('path');
var path__default = _interopDefault(path);
var fs = require('fs');
var os = _interopDefault(require('os'));
var consola = _interopDefault(require('consola'));
var c = _interopDefault(require('chalk'));
var stdEnv = _interopDefault(require('std-env'));
var arg = _interopDefault(require('arg'));
var jiti = _interopDefault(require('jiti'));
var dotenv = _interopDefault(require('dotenv'));

const usage = 'nuxt telemetry `status`|`enable`|`disable` [`-g`,`--global`] [`dir`]';
const RC_FILENAME = '.nuxtrc';

function _run() {
  const args = arg({
    '--global': Boolean,
    '-g': '--global'
  });
  const [command, _dir = '.'] = args._;
  const dir = path.resolve(process.cwd(), _dir);
  const global = args['--global'];

  if (!global && !fs.existsSync(path.resolve(dir, 'nuxt.config.js')) && !fs.existsSync(path.resolve(dir, 'nuxt.config.ts'))) {
    consola.error('It seems you are not in a nuxt project!');
    consola.info('You can try with providing dir or using `-g`');
    showUsage();
  }

  switch (command) {
    case 'enable':
      setRC('telemetry.enabled', true);
      setRC('telemetry.consent', meta.consentVersion);
      showStatus();
      consola.info('You can disable telemetry with `npx nuxt telemetry disable ' + (global ? '-g' : _dir));
      return;

    case 'disable':
      setRC('telemetry.enabled', false);
      setRC('telemetry.consent', 0);
      showStatus();
      consola.info('You can enable telemetry with `npx nuxt telemetry enable ' + (global ? '-g' : _dir) + '`');
      return;

    case 'status':
      showStatus();
      return;

    default:
      showUsage();
  }

  function _checkDisabled() {
    // test
    if (stdEnv.test) {
      return 'Because running in test environment';
    } // env


    if (destr(process.env.NUXT_TELEMETRY_DISABLED)) {
      return 'by `NUXT_TELEMETRY_DISABLED` environment variable';
    } // dotenv


    const dotenvFile = path.resolve(dir, '.env');

    if (fs.existsSync(dotenvFile)) {
      const _env = dotenv.parse(fs.readFileSync(dotenvFile));

      if (destr(_env.NUXT_TELEMETRY_DISABLED)) {
        return 'by `NUXT_TELEMETRY_DISABLED` from ' + dotenvFile;
      }
    }

    const disabledByConf = conf => conf.telemetry === false || conf.telemetry && conf.telemetry.enabled === false; // nuxt.config


    try {
      const _require = jiti(dir);

      if (disabledByConf(_require('./nuxt.config'))) {
        return 'by ' + _require.resolve('./nuxt.config');
      }
    } catch (_) {} // Projct .nuxtrc


    if (disabledByConf(rc.read({
      name: RC_FILENAME,
      dir
    }))) {
      return 'by ' + path.resolve(dir, RC_FILENAME);
    } // Global .nuxtrc


    if (disabledByConf(rc.readUser({
      name: RC_FILENAME
    }))) {
      return 'by ' + path.resolve(os.homedir(), RC_FILENAME);
    }
  }

  function showStatus() {
    const disabled = _checkDisabled();

    if (disabled) {
      consola.info(`Nuxt telemetry is ${c.yellow('disabled')} ${disabled}`);
    } else {
      consola.info(`Nuxt telemetry is ${c.green('enabled')}`, global ? 'on machine' : 'on current project');
    }
  }

  function showUsage() {
    consola.info(`Usage: ${usage}`);
    process.exit(0);
  }

  function setRC(key, val) {
    const update = {
      [key]: val
    };

    if (global) {
      rc.updateUser(update, RC_FILENAME);
    } else {
      rc.update(update, {
        name: RC_FILENAME,
        dir
      });
    }
  }
}

function run() {
  try {
    _run();
  } catch (err) {
    consola.fatal(err);
    process.exit(1);
  }
}

if (!module.parent) {
  run();
}

exports.run = run;
exports.usage = usage;
