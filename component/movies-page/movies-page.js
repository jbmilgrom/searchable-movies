angular.module('component')

  .component('moviesPage', {
    templateUrl: 'component/movies-page/movies-page.html',
    controller: function() {
      this.selectedMovie = null;
      this.onMovieSelect = movie => {
        this.selectedMovie = movie;
      };
    }
  });