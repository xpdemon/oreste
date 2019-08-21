import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-creation-perso-oreste',
  templateUrl: './creation-perso-oreste.component.html',
  styleUrls: ['./creation-perso-oreste.component.scss']
})
export class CreationPersoOresteComponent implements OnInit {

  creationForm: FormGroup;
  constructor() {
    this.creationForm = new FormGroup({
      nom: new FormControl('', Validators.required),
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
    });
  }

  ngOnInit() {
  }

}
