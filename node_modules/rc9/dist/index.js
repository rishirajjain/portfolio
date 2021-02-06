'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var fs = require('fs');
var path = require('path');
var os = require('os');
var destr = _interopDefault(require('destr'));
var flat = require('flat');
var defu = _interopDefault(require('defu'));

var RE_KEY_VAL = /^\s*([^=\s]+)\s*=\s*(.*)?\s*$/;
var RE_LINES = /\n|\r|\r\n/;
var defaults = {
  name: '.conf',
  dir: process.cwd(),
  flat: false
};

function withDefaults(options) {
  if (typeof options === 'string') {
    options = {
      name: options
    };
  }

  return Object.assign(Object.assign({}, defaults), options);
}

function parse(contents, options) {
  var config = {};
  var lines = contents.split(RE_LINES);

  for (var i = 0, list = lines; i < list.length; i += 1) {
    var line = list[i];

    var match = line.match(RE_KEY_VAL);

    if (!match) {
      continue;
    } // Key


    var key = match[1];

    if (!key || key === '__proto__' || key === 'constructor') {
      continue;
    }

    config[key] = destr(match[2].trim()
    /* val */
    );
  }

  return (options === null || options === void 0 ? void 0 : options.flat) ? config : flat.unflatten(config, {
    overwrite: true
  });
}
function parseFile(path, options) {
  if (!fs.existsSync(path)) {
    return {};
  }

  return parse(fs.readFileSync(path, 'utf-8'), options);
}
function read(options) {
  options = withDefaults(options);
  return parseFile(path.resolve(options.dir, options.name), options);
}
function readUser(options) {
  options = withDefaults(options);
  options.dir = os.homedir();
  return read(options);
}
function serialize(config) {
  return Object.entries(flat.flatten(config)).map(function (ref) {
    var key = ref[0];
    var val = ref[1];

    return (key + "=" + (typeof val === 'string' ? val : JSON.stringify(val)));
  }).join('\n');
}
function write(config, options) {
  options = withDefaults(options);
  fs.writeFileSync(path.resolve(options.dir, options.name), serialize(config), {
    encoding: 'utf-8'
  });
}
function writeUser(config, options) {
  options = withDefaults(options);
  options.dir = os.homedir();
  write(config, options);
}
function update(config, options) {
  options = withDefaults(options);

  if (!options.flat) {
    config = flat.unflatten(config, {
      overwrite: true
    });
  }

  var newConfig = defu(config, read(options));
  write(newConfig, options);
  return newConfig;
}
function updateUser(config, options) {
  options = withDefaults(options);
  options.dir = os.homedir();
  return update(config, options);
}

exports.defaults = defaults;
exports.parse = parse;
exports.parseFile = parseFile;
exports.read = read;
exports.readUser = readUser;
exports.serialize = serialize;
exports.update = update;
exports.updateUser = updateUser;
exports.write = write;
exports.writeUser = writeUser;
