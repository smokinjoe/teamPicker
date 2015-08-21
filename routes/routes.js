exports.index = function (req, res) {
  res.render('index');
};

exports.vue = function (req, res) {
  res.render('vue');
}

exports.partials = function (req, res) {
  var name = req.params.name;
  res.render('partials/' + name);
};