import { Component, OnInit, Input } from '@angular/core';
import { Arme } from '../arme.interface';
import { find } from 'rxjs/operators';

@Component({
  selector: 'app-armes-detail',
  templateUrl: './armes-detail.component.html',
  styleUrls: ['./armes-detail.component.scss']
})
export class ArmesDetailComponent implements OnInit {

  @Input() arme: Arme;
  @Input() armeId: string;
  @Input() find: string;
  constructor() { }

  ngOnInit() {
    this.arme.id = this.armeId;
  }



}
