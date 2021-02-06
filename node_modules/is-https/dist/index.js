'use strict';

function isHTTPS(req, trustProxy) {
  if ( trustProxy === void 0 ) trustProxy = true;

  // Check x-forwarded-proto header
  var _xForwardedProto = trustProxy && req.headers ? req.headers['x-forwarded-proto'] : undefined;

  var protoCheck = typeof _xForwardedProto === 'string' ? _xForwardedProto.includes('https') : undefined;

  if (protoCheck) {
    return true;
  } // Check tlsSocket


  var _encrypted = req.connection ? req.connection.encrypted : undefined;

  var encryptedCheck = _encrypted !== undefined ? _encrypted === true : undefined;

  if (encryptedCheck) {
    return true;
  }

  if (protoCheck === undefined && encryptedCheck === undefined) {
    return undefined;
  }

  return false;
}

module.exports = isHTTPS;
