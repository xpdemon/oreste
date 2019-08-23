import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GamesComponent } from './games/games.component';
import { WelcomComponent } from './welcom/welcom.component';
import { JoueursComponent } from './joueurs/joueurs.component';
import { GamesService } from './games.service';
import { HttpClientModule } from '@angular/common/http';
import { HeadersService } from './shared/headers.service';
import { TestEsComponent } from './test-es/test-es.component';
import { GameDetailComponent } from './model/game-detail/game-detail.component';
import { JoueurDetailsComponent } from './joueurs/joueur-details/joueur-details.component';
import { PersonnagesComponent } from './personnages/personnages/personnages.component';
import { PersonnageDetailsComponent } from './personnages/personnage-details/personnage-details.component';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonnageOresteComponent } from './personnages/oreste/personnage-oreste/personnage-oreste.component';
import { PersonnageOresteDetailComponent } from './personnages/oreste/personnage-oreste-detail/personnage-oreste-detail.component';
import { CreationPersoOresteComponent } from './personnages/oreste/creation-perso-oreste/creation-perso-oreste.component';
import { ArmesComponent } from './equipement/orest/armes/armes.component';
import { ArmesDetailComponent } from './equipement/orest/armes-detail/armes-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    GamesComponent,
    WelcomComponent,
    JoueursComponent,
    TestEsComponent,
    GameDetailComponent,
    JoueurDetailsComponent,
    PersonnagesComponent,
    PersonnageDetailsComponent,
    PersonnageOresteComponent,
    PersonnageOresteDetailComponent,
    CreationPersoOresteComponent,
    ArmesComponent,
    ArmesDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,


  ],
  providers: [
    GamesService,
    HeadersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
