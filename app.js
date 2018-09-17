angular.module('app', ['component', 'service'])

  .component('test', {
    templateUrl: 'test.html',
    bindings: {
      heading: '<'
    },
    controller: function() {
      console.log('test component is running');
    }
  });