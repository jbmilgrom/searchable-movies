angular.module('service')

  .factory('castService', function($http) {
    const DOMAIN = 'https://clutter-front-end-interview.herokuapp.com';
    const TMDB_DOMAIN = `http://image.tmdb.org/t/p/w185`;

    return {
      getAll: movieId => $http.get(`${DOMAIN}/movies/${movieId}/cast_members.json`).then(r => r.data),
      makeFullProfilePath: profilePath => `${TMDB_DOMAIN}/${profilePath}`
    };
  });