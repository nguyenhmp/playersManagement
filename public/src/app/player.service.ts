import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import 'rxjs';

@Injectable()
export class PlayerService {

  constructor(private _Http:Http) { }

  create(player){
    console.log("inside service")
    console.log(player)
    return this._Http.post('/players', player)
    .map((data)=>{
      console.log("back inside my service")
      console.log(data);
      return data.json()
    })
    .toPromise()
    
  }
  getAll(){
    console.log("inside service")
    return this._Http.get('/players')
    .map((data)=>{
      console.log(data)
      return data.json()
    })
    .toPromise()
  }
  delete(id){
    console.log("inside service for delete")
    console.log(`/players/${id}`)
    return this._Http.delete(`/players/${id}`)
    .map((data)=>{
      console.log(data)
    })
    .toPromise();
  }
}
