import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Armures } from '../armures.interface';

@Component({
  selector: 'app-armures-details',
  templateUrl: './armures-details.component.html',
  styleUrls: ['./armures-details.component.scss']
})
export class ArmuresDetailsComponent implements OnInit {

  @Input() armure: Armures;
  @Input() armureId: string;
  @Output() selectedArmure = new EventEmitter<Armures>();
  constructor() { }

  ngOnInit() {
    this.armure.id = this.armureId;
  }

  getid(){
    this.selectedArmure.emit(this.armure);
  }

}
