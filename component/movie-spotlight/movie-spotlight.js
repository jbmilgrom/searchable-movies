angular.module('component')

  .component('movieSpotlight', {
    templateUrl: 'component/movie-spotlight/movie-spotlight.html',
    bindings: {
      /**
       * @var {{id: number, overview: string, poster_path: string, release_data: string, title: string, tmbd_id: number}}
       */
      movie: '<'
    },
    controller: function($http) {

      this.$onChanges = changes => {
        const movie = changes.movie.currentValue;
        if (movie) {
          this.movie = movie;
          this.isFetching = true;
          movieCast($http, movie.id).then(cast => {
            this.top3CastMembers = cast.slice(0, 3).map(member => Object.assign(member, {
              profile_path: `http://image.tmdb.org/t/p/w185/${member.profile_path}`
            }));
            this.isFetching = false;
          });
        }
      };

    }
  });


  const movieCast = (http, id) => {
    return http.get(`https://clutter-front-end-interview.herokuapp.com/movies/${id}/cast_members.json`)
      .then(response => response.data)
  };

