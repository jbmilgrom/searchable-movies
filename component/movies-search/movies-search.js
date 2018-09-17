angular.module('component')

  .component('moviesSearch', {
    templateUrl: 'component/movies-search/movies-search.html',
    bindings: {
      onMovieSelect: '&',
      selectedMovie: '<'
    },
    controller: function(movieService) {
      this.searchText = '';
      this.isFetching = false;
      this.movies = [];

      this.handleSearch = () => {
        if (!this.searchText.length) {
          this.movies = [];
          return;
        }
        this.isFetching = true;
        movieService.search(this.searchText).then(movies => {
          this.movies = movies;
          this.isFetching = false;
        });
      };
    }
  });
