import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArmeSource, Arme } from '../arme.interface';
import { ElasticService } from 'src/app/shared/elastic.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-armes',
  templateUrl: './armes.component.html',
  styleUrls: ['./armes.component.scss']
})
export class ArmesComponent implements OnInit {

  @Output() selectedArme = new EventEmitter<Arme>();


  armesSources: ArmeSource[];
  arme: Arme ;
  constructor(private es: ElasticService) {}

  ngOnInit() {
    this.GetAllArmes();
  }

  GetAllArmes(){
    this.es.getByType('equipement-oreste', 'armes')
    .then(response => {
      this.armesSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }

  armeToSend(arme: Arme){
    this.arme = arme;
    this.selectedArme.emit(this.arme);
  }


}
