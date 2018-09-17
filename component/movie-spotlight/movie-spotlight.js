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
            this.top3CastMembers = getFirst3WithProfilePath(cast).map(member => Object.assign(member, {
              profile_path: `http://image.tmdb.org/t/p/w185/${member.profile_path}`
            }));
            this.isFetching = false;
          });
        }
      };

    }
  });

  /**
   * Data returned by the /cast_members data sometimes lacks a profile_path property
   * @param {*} castMembers
   */
  const getFirst3WithProfilePath = castMembers => {
    const first3 = [];
    for (let i = 0; i < castMembers.length; i++) {
      const member = castMembers[i];
      if (member.profile_path) {
        first3.push(member);
      }
      if (first3.length === 3) {
        return first3;
      }
    }
    return first3;
  }

  const movieCast = (http, id) => {
    return http.get(`https://clutter-front-end-interview.herokuapp.com/movies/${id}/cast_members.json`)
      .then(response => response.data)
  };

