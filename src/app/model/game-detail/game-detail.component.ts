import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent implements OnInit {

  @Input() game: Game;

  constructor() { }

  ngOnInit() {
  }

  public storeCurrentGame(game: Game){
    localStorage.setItem('current_Game', game.nom);
  }

}
