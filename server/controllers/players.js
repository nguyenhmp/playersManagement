console.log("players controller")
var mongoose = require('mongoose');
var Player = mongoose.model('Player')
function PlayersController(){
  this.index = function(req,res){
    console.log("inside controller")
    Player.find({}, (err, players)=>{
        console.log(players)
        res.json(players);        
    })
  };
  this.create = function(req,res){
    console.log("inside controller create function")
    console.log(req.body)
    
    var player = new Player(req.body);
    player.save(function(err, player){
        if(err){
            console.log(err, "==========")
            res.json(err)
        }
        console.log(player, "===========")
        res.json(player);   
    })
  };
    this.delete = function(req,res){
    console.log("inside controller delete function")
    console.log(req.params.id)
    
    // var player = new Player(req.body);
    Player.findByIdAndRemove(req.params.id, (err, player)=>{
        if(err){
            console.log(err, "==========")
            res.json(err)
        }
        console.log(player, "===========")
        res.json(player);   
    })
  };
}
module.exports = new PlayersController();