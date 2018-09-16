angular.module('component')

  .component('moviesSearch', {
    templateUrl: 'component/movies-search/movies-search.html',
    controller: function($http) {
      this.searchText = '';
      this.isFetching = false;
      this.movies = [];

      this.handleSearch = () => {
        if (!this.searchText.length) {
          this.movies = [];
          return;
        }
        this.isFetching = true;
        searchMovies($http, this.searchText).then(movies => {
          console.log('helloooo', movies);
          this.movies = movies;
          this.isFetching = false;

          console.log('isfetching', this.isFetching);
        });
      };
    }
  });


const searchMovies = (http, title) => {
  return http.get(`https://clutter-front-end-interview.herokuapp.com/movies.json?q[title_cont]=${title}`)
    .then(response => response.data)
};
