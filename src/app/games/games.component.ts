import { Component, OnInit } from '@angular/core';
import { GamesService } from '../games.service';
import { Game, GameSource } from '../models/game';
import { ElasticService } from '../shared/elastic.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  gamesSources: GameSource[];

  constructor(private es: ElasticService) { }

  ngOnInit() {
   this.getAllGames();

  }

  public getAllGames() {
    this.es.getAllDocuments('games').then(response => {
      this.gamesSources = response.hits.hits;
      console.log(response);
    }, error => {
      console.error(error);
    });
    }




}
