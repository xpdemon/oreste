import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonnageOreste } from '../personnage-oreste/personnage-oreste.interface';
import { Arme } from 'src/app/equipement/orest/arme.interface';
import { Armures, ArmureSource } from 'src/app/equipement/orest/armures.interface';
import { ElasticService } from 'src/app/shared/elastic.service';
import { PouvoirSource, Pouvoir } from 'src/app/equipement/orest/pouvoir.interface';




@Component({
  selector: 'app-creation-perso-oreste',
  templateUrl: './creation-perso-oreste.component.html',
  styleUrls: ['./creation-perso-oreste.component.scss']
})
export class CreationPersoOresteComponent implements OnInit {

  arme1: Arme;
  arme2: Arme;
  isArme: number;
  armure: Armures;
  pouvoir: Pouvoir;
  pouvoirList: Pouvoir[] = [];
  armuresSources: ArmureSource[];
  pouvoirSources: PouvoirSource[];


  creationForm: FormGroup;
  constructor(private es: ElasticService) {
    this.creationForm = new FormGroup({
      nom: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
      prenom: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      sexe: new FormControl('', Validators.required),
      taille: new FormControl('', Validators.required),
      classe_de_combat: new FormControl('', Validators.required),
      grade: new FormControl('', Validators.required),
      intelligence: new FormControl('', Validators.required),
      esprit: new FormControl('', Validators.required),
      corps: new FormControl('', Validators.required),
      artsEtLettres: new FormControl('', Validators.required),
      codeEtProgrammation: new FormControl('', Validators.required),
      elocution: new FormControl('', Validators.required),
      perception: new FormControl('', Validators.required),
      physiqueEtMathematiques: new FormControl('', Validators.required),
      psychologie: new FormControl('', Validators.required),
      cultureElfhaym: new FormControl('', Validators.required),
      cultureFallen: new FormControl('', Validators.required),
      cultureKrhone: new FormControl('', Validators.required),
      cultureSolarienne: new FormControl('', Validators.required),
      astronavigation: new FormControl('', Validators.required),
      genieHighTech: new FormControl('', Validators.required),
      pilotage: new FormControl('', Validators.required),
      technologieElfhaym: new FormControl('', Validators.required),
      technologieKrhone: new FormControl('', Validators.required),
      discrétion: new FormControl('', Validators.required),
      medecineEtBiologie: new FormControl('', Validators.required),
      systemesDeSecurité: new FormControl('', Validators.required),
      technologieFallen: new FormControl('', Validators.required),
      technologieSolarienne: new FormControl('', Validators.required),
      acrobatie: new FormControl('', Validators.required),
      apesanteur: new FormControl('', Validators.required),
      athletisme: new FormControl('', Validators.required),
      conduite: new FormControl('', Validators.required),
      intimidation: new FormControl('', Validators.required),
      seduction: new FormControl('', Validators.required),
      sociologieElfhaym: new FormControl('', Validators.required),
      sociologieFallen: new FormControl('', Validators.required),
      sociologieKrhone: new FormControl('', Validators.required),
      sociologieSolarienne: new FormControl('', Validators.required),
      artillerie: new FormControl('', Validators.required),
      canonsCourts: new FormControl('', Validators.required),
      canonsLongs: new FormControl('', Validators.required),
      canonsLourds: new FormControl('', Validators.required),
      lames: new FormControl('', Validators.required),
      resilence: new FormControl('', Validators.required),
      sensDuCombat: new FormControl('', Validators.required),





    });
  }

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

  getSelectedArmure(armure: Armures){
    this.armure = armure;
  }

  getSelectedPouvoir(pouvoir: Pouvoir){
    this.pouvoir = pouvoir;
    this.pouvoirList.push(this.pouvoir);
  }

  GetAllArmues(){
    this.es.getByType('equipement-oreste', 'armures')
    .then(response => {
      this.armuresSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  GetAllBouclier(){
    this.es.getByType('equipement-oreste', 'bouclier')
    .then(response => {
      this.armuresSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  GetAllMods(){
    this.es.getByType('equipement-oreste', 'module')
    .then(response => {
      this.armuresSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  GetAllPouvoir(){
    this.es.getByType('equipement-oreste', 'pouvoir')
    .then(response => {
      this.pouvoirSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  suppPouvoir(pouvoir:Pouvoir){
    const index: number = this.pouvoirList.indexOf(pouvoir);
    this.pouvoirList.splice(index, 1);
  }
}
