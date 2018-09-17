angular.module('service')

  .factory('movieService', function($http) {
    const DOMAIN = 'https://clutter-front-end-interview.herokuapp.com';

    return {
      search: title =>$http.get(`${DOMAIN}/movies.json?q[title_cont]=${title}`).then(r => r.data)
    };
  });