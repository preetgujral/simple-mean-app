var Movie = require('./models/movie');

module.exports = function(app) {
  app.get('/api/movies', function(req, res) {
    Movie.find(function(err, movies) {
      if (err) res.send (err);
      res.json(movies);
    })
  });

  app.get('*', function(req, res) {
    res.sendfile('./public/views/index.html')
  });
};
