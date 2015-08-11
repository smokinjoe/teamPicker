var express = require('express'),
    router = express.Router();

router.get('/', function (req, res, next) {
  res.render('apiIndex', { title: 'Welcome to TeamPicker API version 1.0' });
});

module.exports = router;