import { Component, OnInit } from '@angular/core';
import { PersonnageOreste } from './personnage-oreste.interface';

@Component({
  selector: 'app-personnage-oreste',
  templateUrl: './personnage-oreste.component.html',
  styleUrls: ['./personnage-oreste.component.scss']
})
export class PersonnageOresteComponent implements OnInit {
  personnage: PersonnageOreste;
  constructor() { }

  ngOnInit() {
  }

}
