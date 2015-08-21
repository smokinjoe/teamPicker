var viewModel = new Vue({
  el: '#my-vue-instance',
  data: {
    string: 'Custom Filters'
  },
  methods:{
  },
  filters: {
    upper: function (value) {
      return value.toUpperCase();
    },
    lower: function (value) {
      return value.toLowerCase();
    }
  }
});