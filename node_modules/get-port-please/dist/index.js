'use strict';

var net = require('net');
var fsMemo = require('fs-memo');

function _await(value, then, direct) {
  if (direct) {
    return then ? then(value) : value;
  }

  if (!value || !value.then) {
    value = Promise.resolve(value);
  }

  return then ? value.then(then) : value;
}

var checkPorts = _async(function (ports) {
  var _exit = false;
  return _continue(_forOf(ports, function (p) {
    return _await(checkPort(p), function (r) {
      if (r) {
        _exit = true;
        return r;
      }
    });
  }, function () {
    return _exit;
  }), function (_result) {
    return _exit ? _result : checkPort(0);
  });
});

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

var getPort = _async(function (options) {
  var opts = Object.assign({}, defaults, options);
  var portsToCheck = [];

  if (!opts.random) {
    // options.port
    if (opts.port) {
      portsToCheck.push(opts.port);
    } // options.ports


    if (Array.isArray(opts.ports)) {
      portsToCheck.push.apply(portsToCheck, opts.ports);
    }
  } // Memo


  var memoOptions = {
    name: opts.memoName,
    dir: opts.memoDir
  };
  var memoKey = 'port_' + opts.name;
  return _await(fsMemo.getMemo(memoOptions), function (memo) {
    if (memo[memoKey]) {
      portsToCheck.push(memo[memoKey]);
    }

    return _await(checkPorts(portsToCheck), function (availablePort) {
      var obj;

      // Persist
      return _await(fsMemo.setMemo(( obj = {}, obj[memoKey] = availablePort, obj ), memoOptions), function () {
        return availablePort;
      });
    });
  });
});

var _iteratorSymbol = /*#__PURE__*/typeof Symbol !== "undefined" ? Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")) : "@@iterator";

function _settle(pact, state, value) {
  if (!pact.s) {
    if (value instanceof _Pact) {
      if (value.s) {
        if (state & 1) {
          state = value.s;
        }

        value = value.v;
      } else {
        value.o = _settle.bind(null, pact, state);
        return;
      }
    }

    if (value && value.then) {
      value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
      return;
    }

    pact.s = state;
    pact.v = value;
    var observer = pact.o;

    if (observer) {
      observer(pact);
    }
  }
}

var _Pact = /*#__PURE__*/function () {
  function _Pact() {}

  _Pact.prototype.then = function (onFulfilled, onRejected) {
    var result = new _Pact();
    var state = this.s;

    if (state) {
      var callback = state & 1 ? onFulfilled : onRejected;

      if (callback) {
        try {
          _settle(result, 1, callback(this.v));
        } catch (e) {
          _settle(result, 2, e);
        }

        return result;
      } else {
        return this;
      }
    }

    this.o = function (_this) {
      try {
        var value = _this.v;

        if (_this.s & 1) {
          _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
        } else if (onRejected) {
          _settle(result, 1, onRejected(value));
        } else {
          _settle(result, 2, value);
        }
      } catch (e) {
        _settle(result, 2, e);
      }
    };

    return result;
  };

  return _Pact;
}();

function _isSettledPact(thenable) {
  return thenable instanceof _Pact && thenable.s & 1;
}

function _forTo(array, body, check) {
  var i = -1,
      pact,
      reject;

  function _cycle(result) {
    try {
      while (++i < array.length && (!check || !check())) {
        result = body(i);

        if (result && result.then) {
          if (_isSettledPact(result)) {
            result = result.v;
          } else {
            result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
            return;
          }
        }
      }

      if (pact) {
        _settle(pact, 1, result);
      } else {
        pact = result;
      }
    } catch (e) {
      _settle(pact || (pact = new _Pact()), 2, e);
    }
  }

  _cycle();

  return pact;
}

var defaults = {
  name: 'default',
  random: false,
  port: parseInt(process.env.PORT || '') || 3000,
  ports: [4000, 5000, 6000, 7000],
  memoDir: __dirname,
  memoName: '.get-port'
};

function _forOf(target, body, check) {
  if (typeof target[_iteratorSymbol] === "function") {
    var iterator = target[_iteratorSymbol](),
        step,
        pact,
        reject;

    function _cycle(result) {
      try {
        while (!(step = iterator.next()).done && (!check || !check())) {
          result = body(step.value);

          if (result && result.then) {
            if (_isSettledPact(result)) {
              result = result.v;
            } else {
              result.then(_cycle, reject || (reject = _settle.bind(null, pact = new _Pact(), 2)));
              return;
            }
          }
        }

        if (pact) {
          _settle(pact, 1, result);
        } else {
          pact = result;
        }
      } catch (e) {
        _settle(pact || (pact = new _Pact()), 2, e);
      }
    }

    _cycle();

    if (iterator.return) {
      var _fixup = function (value) {
        try {
          if (!step.done) {
            iterator.return();
          }
        } catch (e) {}

        return value;
      };

      if (pact && pact.then) {
        return pact.then(_fixup, function (e) {
          throw _fixup(e);
        });
      }

      _fixup();
    }

    return pact;
  } // No support for Symbol.iterator


  if (!("length" in target)) {
    throw new TypeError("Object is not iterable");
  } // Handle live collections properly


  var values = [];

  for (var i = 0; i < target.length; i++) {
    values.push(target[i]);
  }

  return _forTo(values, function (i) {
    return body(values[i]);
  }, check);
}

function _continue(value, then) {
  return value && value.then ? value.then(then) : then(value);
}

function checkPort(port) {
  return new Promise(function (resolve) {
    var server = net.createServer();
    server.unref();
    server.on('error', function () {
      resolve(false);
    });
    server.listen({
      port: port
    }, function () {
      var ref = server.address();
      var port = ref.port;
      server.close(function () {
        resolve(port);
      });
    });
  });
}

module.exports = getPort;
