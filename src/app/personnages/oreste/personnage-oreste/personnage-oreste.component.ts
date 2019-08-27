import { Component, OnInit, Input } from '@angular/core';
import { PersonnageOreste, PersonnageOrestSource } from './personnage-oreste.interface';
import { Arme, ArmeSource } from 'src/app/equipement/orest/arme.interface';
import { Pouvoir } from 'src/app/equipement/orest/pouvoir.interface';
import { ElasticService } from 'src/app/shared/elastic.service';
import { Armures, ArmureSource } from 'src/app/equipement/orest/armures.interface';
import { Mods, ModsSources } from 'src/app/equipement/orest/mods.interface';
import { Bouclier, BouclierSource } from 'src/app/equipement/orest/bouclier.interface';
import { Personnage } from '../../personnage.Interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-personnage-oreste',
  templateUrl: './personnage-oreste.component.html',
  styleUrls: ['./personnage-oreste.component.scss']
})
export class PersonnageOresteComponent implements OnInit {
  personnageId: string;

  personnagesOresteSources: PersonnageOrestSource[];

  constructor(private es: ElasticService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.personnageId = this.route.snapshot.paramMap.get('id').toLocaleLowerCase();
    this.GetPersonnageOreste();
  }

  GetPersonnageOreste(){
    this.es.getAllWithId('personnages-oreste', this.personnageId)
      .then(response => {
        this.personnagesOresteSources = response.hits.hits;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }


}
