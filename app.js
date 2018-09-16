console.log('hello');
angular.module('app', [])

  .component('test', {
    templateUrl: 'test.html',
    bindings: {
      heading: '<'
    },
    controller: function() {
      console.log('test component is running');
    }
  });