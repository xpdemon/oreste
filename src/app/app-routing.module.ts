import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { AppComponent } from './app.component';
import { WelcomComponent } from './welcom/welcom.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { TestEsComponent } from './test-es/test-es.component';
import { PersonnagesComponent } from './personnages/personnages/personnages.component';


const routes: Routes = [
  {path: 'games', component: GamesComponent},
  {path: 'main', component: AppComponent},
  {path: '', component: WelcomComponent},
  {path: 'joueurs', component: JoueursComponent},
  {path: 'joueur/:pseudo', component: GamesComponent},
  {path: 'personnages', component: PersonnagesComponent},
  {path: 'testEs', component: TestEsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
