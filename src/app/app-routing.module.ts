import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GamesComponent } from './games/games.component';
import { AppComponent } from './app.component';
import { WelcomComponent } from './welcom/welcom.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { TestEsComponent } from './test-es/test-es.component';
import { PersonnagesComponent } from './personnages/personnages/personnages.component';
import { CreationPersoOresteComponent } from './personnages/oreste/creation-perso-oreste/creation-perso-oreste.component';
import { ArmesComponent } from './equipement/orest/armes/armes.component';


const routes: Routes = [
  {path: 'games', component: GamesComponent},
  {path: 'main', component: AppComponent},
  {path: '', component: WelcomComponent},
  {path: 'joueurs', component: JoueursComponent},
  {path: 'joueur/:pseudo', component: GamesComponent},
  {path: 'personnages', component: PersonnagesComponent},
  {path: 'testCreation', component: CreationPersoOresteComponent},
  {path: 'testArmes', component: ArmesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
