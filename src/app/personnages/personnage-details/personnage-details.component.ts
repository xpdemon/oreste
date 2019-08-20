import { Component, OnInit, Input } from '@angular/core';
import { Personnage } from '../personnage.Interface';

@Component({
  selector: 'app-personnage-details',
  templateUrl: './personnage-details.component.html',
  styleUrls: ['./personnage-details.component.scss']
})
export class PersonnageDetailsComponent implements OnInit {

 @Input() personnage: Personnage;
 @Input() idPersonnage: string;
  constructor() {  }

  ngOnInit() {
    this.personnage.id = this.idPersonnage;
  }

}
