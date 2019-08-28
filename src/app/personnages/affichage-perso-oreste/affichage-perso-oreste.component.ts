import { Component, OnInit, Input } from '@angular/core';
import { PersonnageOrestSource, PersonnageOreste } from '../oreste/personnage-oreste/personnage-oreste.interface';
import { Arme, ArmeSource } from 'src/app/equipement/orest/arme.interface';
import { Armures, ArmureSource } from 'src/app/equipement/orest/armures.interface';
import { Mods, ModsSources } from 'src/app/equipement/orest/mods.interface';
import { Bouclier, BouclierSource } from 'src/app/equipement/orest/bouclier.interface';
import { ElasticService } from 'src/app/shared/elastic.service';
import { Pouvoir } from 'src/app/equipement/orest/pouvoir.interface';

@Component({
  selector: 'app-affichage-perso-oreste',
  templateUrl: './affichage-perso-oreste.component.html',
  styleUrls: ['./affichage-perso-oreste.component.scss']
})
export class AffichagePersoOresteComponent implements OnInit {


  @Input() personnage: PersonnageOreste;
  isArme: number;
  arme1: Arme;
  arme2: Arme;
  armure: Armures;
  mods: Mods;
  modsList: Mods[] = [];
  pouvoirList: Pouvoir[] = [];
  pouvoir: Pouvoir;
  bouclier: Bouclier;
  armuresSources: ArmureSource[];
  bouclierSources: BouclierSource[];
  modsSources: ModsSources[];
  armesSources: ArmeSource[];

  constructor(private es: ElasticService) { }

  ngOnInit() {
  }



getSelectedArme1(arme: Arme) {
  if (this.isArme === 1) {
    this.arme1 = arme;
  }

  if (this.isArme === 2) {
    this.arme2 = arme;
  }

}

getSelectedArmure(armure: Armures) {
  this.armure = armure;
}



getSelectedMod(mod: Mods) {
  this.mods = mod;
  this.modsList.push(this.mods);
}

getSelectedBouclier(bouclier: Bouclier) {
  this.bouclier = bouclier;
}

GetAllArmues() {
  this.es.getByType('equipement-oreste', 'armures')
    .then(response => {
      this.armuresSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
}

GetAllBouclier() {
  this.es.getByType('equipement-oreste', 'bouclier')
    .then(response => {
      this.bouclierSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
}

GetAllMods() {
  this.es.getByType('equipement-oreste', 'module')
    .then(response => {
      this.modsSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
}

GetAllArmes(){
  this.es.getByType('equipement-oreste', 'armes')
  .then(response => {
    this.armesSources = response.hits.hits;
    console.log(response);
  }, error => {
    console.log(error);
  });
}

suppMods(mod: Mods) {
  const index: number = this.modsList.indexOf(mod);
  this.modsList.splice(index, 1);
}

GetAllResources(){
 this.es.getById('equipement-oreste',this.personnage.armePrincipale)
 .then(response => {
   this.arme1 = response._source;
   console.log(response);
 });


 this.es.getById('equipement-oreste',this.personnage.armeSecondaire)
 .then(response => {
   this.arme2 = response._source;
   console.log(response);
 });

 this.es.getById('equipement-oreste',this.personnage.armure)
 .then(response => {
  this.armure = response._source;
  console.log(response);
 });

 this.personnage.pouvoirs.forEach(pouvoir => {
   this.es.getById('equipement-oreste', pouvoir)
   .then(response =>{
     this.pouvoir = response._source;
     this.pouvoirList.push(this.pouvoir);
     console.log(response);
   });
 });
}


}

