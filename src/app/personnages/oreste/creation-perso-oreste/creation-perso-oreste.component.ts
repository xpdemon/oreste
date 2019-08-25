import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PersonnageOreste } from '../personnage-oreste/personnage-oreste.interface';
import { Arme } from 'src/app/equipement/orest/arme.interface';




@Component({
  selector: 'app-creation-perso-oreste',
  templateUrl: './creation-perso-oreste.component.html',
  styleUrls: ['./creation-perso-oreste.component.scss']
})
export class CreationPersoOresteComponent implements OnInit {

  arme1: Arme;
  arme2: Arme;
  isArme: number;
  isOpen: boolean =true;

  creationForm: FormGroup;
  constructor() {
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
      discrétion : new FormControl('', Validators.required),
      medecineEtBiologie : new FormControl('', Validators.required),
      systemesDeSecurité : new FormControl('', Validators.required),
      technologieFallen : new FormControl('', Validators.required),
      TechnologieSolarienne : new FormControl('', Validators.required),


    });
  }

  ngOnInit() {
  }

  getSelectedArme1(arme: Arme){
    if (this.isArme === 1){
    this.arme1 = arme;
    }

    if(this.isArme === 2){
      this.arme2 = arme;
    }

    this.isOpen=false;

     }





}
