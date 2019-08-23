import { Component, OnInit } from '@angular/core';
import { ArmeSource } from '../arme.interface';
import { ElasticService } from 'src/app/shared/elastic.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-armes',
  templateUrl: './armes.component.html',
  styleUrls: ['./armes.component.scss']
})
export class ArmesComponent implements OnInit {

  form: FormGroup;
  armesSources: ArmeSource[];
  constructor(private es: ElasticService) {
    this.form = new FormGroup({
      arme: new FormControl('', Validators.required)
    });
   }

  ngOnInit() {
    this.GetAllArmes();
  }

  GetAllArmes(){
    this.es.getAllDocuments('armes-oreste')
    .then(response => {
      this.armesSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }



}
