Vue.filter('upper', function (value) {
  return value.toUpperCase();
});

Vue.filter('lower', function (value) {
  return value.toLowerCase();
});

Vue.component('alert', {
  props: ['type', 'bold', 'msg'],
  template: '<div class="alert alert-{{ type }}" role="alert"><b>{{ bold }}</b> {{ msg }}</div>'
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