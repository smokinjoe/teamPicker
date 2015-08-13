// ============
// Logging
// =======
var log4js = require('log4js');
var logger = log4js.getLogger('user');
logger.setLevel('ERROR');
logger.setLevel('INFO');
logger.setLevel('DEBUG');

var methods = {
  checkRequest: function () {
    logger.debug("JOE: req.params: ", req.params);
    logger.debug("JOE: req.body: ", req.body);
    logger.debug("JOE: req.query: ", req.query);
  },

  log: function (key) {
    logger.debug("JOE: " + key + ": ", key);
  },
  respondError : function (res, error, status, message) {
    message = message || 'Oops something went wrong';
    status = status || 500;
    error = error || [];
    logger.error("Error: " + message + ": ", error);
    res.json({
      "status": status,
      "message": message,
      "error": error
    });
  },
  respondSuccess : function (res, result, status, message) {
    message = message || "Success";
    status = status || 200;
    result = result || [];
    res.json({
      "status": status,
      "message": message,
      "data": result
    });
  },
};

module.exports = methods;