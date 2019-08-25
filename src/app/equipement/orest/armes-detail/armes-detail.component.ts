import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { Arme } from '../arme.interface';


@Component({
  selector: 'app-armes-detail',
  templateUrl: './armes-detail.component.html',
  styleUrls: ['./armes-detail.component.scss']
})
export class ArmesDetailComponent implements OnInit {

  @Input() arme: Arme;
  @Input() armeId: string;
  @Output() selectedArme = new EventEmitter<Arme>();

  constructor() { }

  ngOnInit() {
    this.arme.id = this.armeId;
  }

  getid(){
    this.selectedArme.emit(this.arme);
  }



}
