(function(){
  'use strict';
  angular.module('app')
  .factory('Blogs', ['$resource', function($resource) {
    return $resource('/blog', {}, {
      query: {method: 'GET', url: 'https://22cnvs5mcc.execute-api.us-east-1.amazonaws.com/items', isArray: true},
      save: {method: 'PUT', url: 'https://22cnvs5mcc.execute-api.us-east-1.amazonaws.com/items'}
    });
  }]);
})();
