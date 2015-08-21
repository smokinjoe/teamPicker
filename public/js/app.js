Vue.filter('upper', function (value) {
  return value.toUpperCase();
});

Vue.filter('lower', function (value) {
  return value.toLowerCase();
});

Vue.component('alert', {
  template: '<div class="alert alert-success" role="alert"><b>Smashing!</b> Nice work.</div>'
});

var viewModel = new Vue({
  el: '#my-vue-instance',
  data: {
    string: 'Custom Filters'
  }
});

var secondViewModel = new Vue({
  el: '#another-vue-instance',
  data: {
    string: 'Lorem ipsum dolor sit amet'
  }
});