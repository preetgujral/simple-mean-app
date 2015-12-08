angular.module('MovieService', [])
  .factory('Movie', [
    '$http', function($http) {
      return {
        get : function() {
          return $http.get('/api/movies');
        },

        create : function(movieData) {
          return $http.post('/api/movies', movieData);
        },

        delete : function(id) {
          return $http.delete('/api/movies/' + id);
        }
      }
    }
  ]);

