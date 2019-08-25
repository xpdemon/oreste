import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Pouvoir, PouvoirSource } from '../pouvoir.interface';
import { ElasticService } from 'src/app/shared/elastic.service';

@Component({
  selector: 'app-pouvoir',
  templateUrl: './pouvoir.component.html',
  styleUrls: ['./pouvoir.component.scss']
})
export class PouvoirComponent implements OnInit {

  @Output() selectedPouvoir = new EventEmitter<Pouvoir>();
  @Input() pouvoirSources: PouvoirSource[];
  pouvoir: Pouvoir;

  constructor(private es: ElasticService) { }

  ngOnInit() {
  }

  pouvoirToSend(pouvoir: Pouvoir){
    this.pouvoir = pouvoir;
    this.selectedPouvoir.emit(this.pouvoir);
  }

}
