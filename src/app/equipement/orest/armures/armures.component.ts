import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ArmeSource } from '../arme.interface';
import { Armures } from '../armures.interface';
import { ElasticService } from 'src/app/shared/elastic.service';

@Component({
  selector: 'app-armures',
  templateUrl: './armures.component.html',
  styleUrls: ['./armures.component.scss']
})
export class ArmuresComponent implements OnInit {

  @Output() selectedArmure = new EventEmitter<Armures>();
  @Input() armuresSources: ArmeSource[];
  armure: Armures;

  constructor(private es: ElasticService) { }

  ngOnInit() {

  }

  armureToSend(armure: Armures) {
    this.armure = armure;
    this.selectedArmure.emit(this.armure);
  }



}
