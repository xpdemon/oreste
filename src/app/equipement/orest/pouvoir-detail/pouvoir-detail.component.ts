import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Pouvoir } from '../pouvoir.interface';

@Component({
  selector: 'app-pouvoir-detail',
  templateUrl: './pouvoir-detail.component.html',
  styleUrls: ['./pouvoir-detail.component.scss']
})
export class PouvoirDetailComponent implements OnInit {

  @Input() pouvoir: Pouvoir;
  @Input() pouvoirId: string;
  @Output() selectedPouvoir = new EventEmitter<Pouvoir>();
  constructor() { }

  ngOnInit() {
    this.pouvoir.id = this.pouvoirId;
    }

  getId(){
    this.selectedPouvoir.emit(this.pouvoir);
  }

}
