import { Component, OnInit } from '@angular/core';
import { ElasticService } from '../shared/elastic.service';
import { JoueurSource } from './joueur.Interface';
import { GameSource } from '../models/game';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.scss']
})
export class JoueursComponent implements OnInit {

  private static readonly INDEX = 'joueurs';
  joueurSources: JoueurSource[];
  gamesources: GameSource[];
  constructor(private es: ElasticService) { }

  ngOnInit() {
    this.getAlljoueurs();
  }

  getAlljoueurs(){
    this.es.getAllDocuments(JoueursComponent.INDEX)
    .then(response => {
      this.joueurSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.log(error);
    });
  }
}
