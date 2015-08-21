var viewModel = new Vue({
  el: '#my-vue-instance',
  data: {
    sortparam: '',
    reverse: false,
    filterKey: '',
    frameworks: [
      {id: '001', framework: 'angular'},
      {id: '002', framework: 'd3'},
      {id: '003', framework: 'node'},
      {id: '004', framework: 'jquery'},
      {id: '005', framework: 'reveal.js'},
      {id: '006', framework: 'impress.js'},
      {id: '007', framework: 'backbone.js'},
      {id: '008', framework: 'meteor.js'},
      {id: '009', framework: 'express'},
      {id: '010', framework: 'moment'},
      {id: '011', framework: 'underscore'},
      {id: '012', framework: 'gulp'},
      {id: '013', framework: 'react'},
      {id: '014', framework: 'ghost'},
      {id: '015', framework: 'sweetalert'},
      {id: '016', framework: 'select2'}
    ]
  },
  methods:{
    sortvia: function (sortparam) {
      this.reverse = (this.sortparam == sortparam) ? !this.reverse : false;
      this.sortparam = sortparam;
    }
  }
});