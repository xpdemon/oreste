import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bouclier } from '../bouclier.interface';

@Component({
  selector: 'app-bouclier-detail',
  templateUrl: './bouclier-detail.component.html',
  styleUrls: ['./bouclier-detail.component.scss']
})
export class BouclierDetailComponent implements OnInit {

  @Input() bouclier: Bouclier;
  @Input() id: string;
  @Output() selectedBouclier = new EventEmitter<Bouclier>();

  constructor() { }

  ngOnInit() {
    this.bouclier.id = this.id
  }

  getId(){
    this.selectedBouclier.emit(this.bouclier);
  }

}
