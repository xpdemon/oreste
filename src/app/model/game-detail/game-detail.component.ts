import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/game';
import { ElasticService } from 'src/app/shared/elastic.service';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input() game: Game;
  @Input() gameId: string;

  constructor(private es: ElasticService) { }

  ngOnInit() {
    this.game.id = this.gameId;
  }

  public storeCurrentGame(game: Game){
    localStorage.setItem('current_Game', game.nom);
  }

deleteGame(game: Game){
  this.es.deleteDoc({
    index: 'games',
    id: game.id,
  }).then((result) => {
    console.log(result);
    window.location.reload();
  }, error => {
    console.error(error);
  });
}

}
