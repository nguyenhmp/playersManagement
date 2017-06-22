import { Component, OnInit } from '@angular/core';
import { PlayerService } from "app/player.service";

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players : any;
  constructor(private _PlayerService:PlayerService) { 
    this._PlayerService.getAll()
    .then((data)=>{
      console.log("back inside list component")
      console.log(data)
      this.players = data
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  ngOnInit() {

  }
  deletePlayer(id, index){
    console.log(id)
    this._PlayerService.delete(id)
    .then((data)=>{
      // this.getAll()
      var index = this.players.indexOf(data);
      console.log(index)
      this.players.splice(index, 1)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  getAll(){
    this._PlayerService.getAll()
    .then((data)=>{
      console.log("back inside list component")
      console.log(data)
      this.players = data
    })
    .catch((err)=>{
      console.log(err)
    })
  }


}
