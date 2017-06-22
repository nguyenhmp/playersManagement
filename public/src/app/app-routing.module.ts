import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerListComponent } from "app/player-list/player-list.component";
import { PlayerCreateComponent } from "app/player-create/player-create.component";
import { PlayerComponent } from "app/player/player.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'players',
    pathMatch: 'full'
  }, {
    path: 'players',
    component: PlayerComponent,
    children:[
      {path: 'list', component: PlayerListComponent},
      {path: 'addplayers', component: PlayerCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
