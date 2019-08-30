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
import { FindPipe } from './find.pipe';
import { OrderModule } from 'ngx-order-pipe';
import { ArmuresComponent } from './equipement/orest/armures/armures.component';
import { ArmuresDetailsComponent } from './equipement/orest/armures-details/armures-details.component';
import { PouvoirComponent } from './equipement/orest/pouvoir/pouvoir.component';
import { PouvoirDetailComponent } from './equipement/orest/pouvoir-detail/pouvoir-detail.component';
import { ModsComponent } from './equipement/orest/mods/mods.component';
import { ModsDetailComponent } from './equipement/orest/mods-detail/mods-detail.component';
import { BouclierComponent } from './equipement/orest/bouclier/bouclier.component';
import { BouclierDetailComponent } from './equipement/orest/bouclier-detail/bouclier-detail.component';
import { AffichagePersoOresteComponent } from './personnages/affichage-perso-oreste/affichage-perso-oreste.component';
import { InventaireComponent } from './personnages/inventaire/inventaire.component';
import { InventaireDetailComponent } from './personnages/inventaire-detail/inventaire-detail.component';




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
    ArmesDetailComponent,
    FindPipe,
    ArmuresComponent,
    ArmuresDetailsComponent,
    PouvoirComponent,
    PouvoirDetailComponent,
    ModsComponent,
    ModsDetailComponent,
    BouclierComponent,
    BouclierDetailComponent,
    AffichagePersoOresteComponent,
    InventaireComponent,
    InventaireDetailComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    SidebarModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule


  ],
  providers: [
    GamesService,
    HeadersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
