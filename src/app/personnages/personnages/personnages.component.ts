import { Component, OnInit, Input } from '@angular/core';
import { Personnage, PersonnageSouce } from '../personnage.Interface';
import { ElasticService } from 'src/app/shared/elastic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-personnages',
  templateUrl: './personnages.component.html',
  styleUrls: ['./personnages.component.scss']
})
export class PersonnagesComponent implements OnInit {

  constructor(private es: ElasticService) { }

  private currentGame = localStorage.getItem('current_Game').toLocaleLowerCase();

  private currentPlayer: string;

  private INDEX = 'personnages' + '-' + this.currentGame;



  personnageSources: PersonnageSouce[];

  ngOnInit() {
    if(localStorage.getItem('role') === 'pj') {
      this.currentPlayer = localStorage.getItem('current_player').toLocaleLowerCase();
      this.getPersonnageByGamesAndPalayers();
    } else {
      this.getAllpersonnagesByGame();
    }
  }

  getPersonnageByGamesAndPalayers() {
    this.es.getAllWithParam(this.INDEX, this.currentPlayer )
      .then(response => {
        this.personnageSources = response.hits.hits;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }

  getAllpersonnagesByGame(){
    this.es.getAllDocuments(this.INDEX)
    .then(response => {
      this.personnageSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
