var express = require('express'),
    router = express.Router();

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Welcome to TeamPicker API version 1.0' });
});

module.exports = router;