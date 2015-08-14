var methods = {
  index: function (req, res) {
    res.render('index');
  },
  partials: function (req, res) {
    var name = req.params.name;
    res.render('partials/' + name);
  }
};
module.exports = methods;