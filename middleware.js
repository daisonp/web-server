module.exports = {
    requiresAuthentication: function (req, res, next) {
      console.log('Private route hit!');
      next();
    },
    logger : function (req, res, next) {
      console.log('Request: '  +new Date().toString() +' ' +req.method +' ' +req.originalUrl );
      console.log();
      next();
    }
};
