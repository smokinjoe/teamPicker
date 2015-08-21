var viewModel = new Vue({
  el: '#my-vue-instance',
  data: {
    textInput: 'Too hot, hot damn.',
    libraries: ['angular.js', 'node.js', 'mithril.js', 'express.js']
  },
  methods: {
    addLibrary: function () {
      this.libraries.push(this.newLibrary);
      this.newLibrary = '';
    },
    deleteLibraries: function () {
      this.libraries = [];
    }
  }
});