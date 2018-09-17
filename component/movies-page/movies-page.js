angular.module('component')

  .component('moviesPage', {
    templateUrl: 'component/movies-page/movies-page.html',
    controller: function() {
      this.selectedMovie = null;
      this.onMovieSelect = movie => {
        console.log('movieSelected', movie);
        this.selectedMovie = movie;
      };
    }
  });