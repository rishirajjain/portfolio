'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var path = require('path');

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

function _empty() {}

function _catch(body, recover) {
  try {
    var result = body();
  } catch (e) {
    return recover(e);
  }

  if (result && result.then) {
    return result.then(void 0, recover);
  }

  return result;
}

function _continue(value, then) {
  return value && value.then ? value.then(then) : then(value);
}

function _async(f) {
  return function () {
    var arguments$1 = arguments;

    for (var args = [], i = 0; i < arguments.length; i++) {
      args[i] = arguments$1[i];
    }

    try {
      return Promise.resolve(f.apply(this, args));
    } catch (e) {
      return Promise.reject(e);
    }
  };
}

function _awaitIgnored(value, direct) {
  if (!direct) {
    return value && value.then ? value.then(_empty) : Promise.resolve();
  }
}

function _continueIgnored(value) {
  if (value && value.then) {
    return value.then(_empty);
  }
}

var setMemo = _async(function (memo, options) {
  var ref = getOptions(options);
  var file = ref.file; // Set local memo

  Object.assign(_memo, memo);
  _memo._pid = process.pid; // Try to persist

  return _continueIgnored(_catch(function () {
    return _awaitIgnored(fs.promises.writeFile(file, JSON.stringify(_memo), 'utf-8'));
  }, _empty));
});
var getMemo = _async(function (options) {
  var ref = getOptions(options);
  var file = ref.file; // Try to load latest memo

  return _continue(_catch(function () {
    return _await(fs.promises.readFile(file, 'utf-8'), function (_fs$readFile) {
      var memo = JSON.parse(_fs$readFile) || {};

      if (!memo._pid) {
        throw new Error('InvalidMemo');
      }

      if (memo._pid === _memo._pid || // fs is more reliable than require cache
      !isAlive(memo.pid) // RIP
      ) {
        Object.assign(_memo, memo);
        _memo._pid = process.pid;
      }
    });
  }, _empty), function (_result) {
    return  _memo;
  });
});
var _memo = {
  _pid: process.pid
};
var defaults = {
  dir: __dirname,
  name: '.fs-memo'
};

function getOptions(options) {
  var opts = Object.assign({}, defaults, options, {
    file: ''
  });
  opts.file = path.resolve(opts.dir, opts.name);
  return opts;
}

function isAlive(pid) {
  try {
    process.kill(pid, 0);
    return true;
  } catch (e) {
    return e.code === 'EPERM';
  }
}

exports.getMemo = getMemo;
exports.setMemo = setMemo;
