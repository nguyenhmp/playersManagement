import { Component, OnInit } from '@angular/core';
import { PlayerService } from "app/player.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-player-create',
  templateUrl: './player-create.component.html',
  styleUrls: ['./player-create.component.css']
})
export class PlayerCreateComponent implements OnInit {
  player = {name:"", position:""}
  constructor(private _PlayerService:PlayerService, private _Router:Router) { }

  ngOnInit() {
  }

  createPlayer(){
    console.log(this.player);
    this._PlayerService.create(this.player)
    .then((data)=>{
      console.log("got back inside the component")      
      console.log(data)
      this._Router.navigateByUrl('/players/list')
    })
    .catch((err)=>{
      console.log(err)
    })
  }
}
