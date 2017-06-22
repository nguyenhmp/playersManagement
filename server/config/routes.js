//make sure to check controllers for changes
console.log('routes');
var players = require('../controllers/players.js')
module.exports = function(app){
  app.get('/players', function(req, res){
    console.log("hit my get /players")
    players.index(req, res)
  });
  app.post('/players', function(req, res){
    console.log("hit my post /players");
    console.log(req.body)
    players.create(req, res)
  });
  app.delete('/players/:id', function(req, res){
    console.log("hit my delete /players/:id");
    console.log(req.params.id)
    players.delete(req, res)
  });
  // app.get('/players/:id', players.show);
  // app.put('/players/:id', players.update);
  // app.delete('/players/:id', players.delete);
}