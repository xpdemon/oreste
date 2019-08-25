import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

import { Bouclier, BouclierSource } from '../bouclier.interface';

@Component({
  selector: 'app-bouclier',
  templateUrl: './bouclier.component.html',
  styleUrls: ['./bouclier.component.scss']
})
export class BouclierComponent implements OnInit {

  @Output() selectedBouclier = new EventEmitter<Bouclier>();
  @Input() bouclierSource: BouclierSource[];
  bouclier: Bouclier;

  constructor() { }

  ngOnInit() {
  }

  bouclierToSend(bouclier: Bouclier){
    this.bouclier = bouclier;
    this.selectedBouclier.emit(this.bouclier);
  }

}
