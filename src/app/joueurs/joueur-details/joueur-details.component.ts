import { Component, OnInit, Input } from '@angular/core';
import { Joueur } from '../joueur.Interface';
import { Game, GameSource } from 'src/app/models/game';
import { ElasticService } from 'src/app/shared/elastic.service';

@Component({
  selector: 'app-joueur-details',
  templateUrl: './joueur-details.component.html',
  styleUrls: ['./joueur-details.component.scss']
})
export class JoueurDetailsComponent implements OnInit {

  @Input() joueur: Joueur;
  @Input() games: Game[];
  constructor(private es: ElasticService) { }

  ngOnInit() {
  }

  storePseudo(joueur: Joueur){
    localStorage.setItem('current_player', joueur.pseudo);
  }
}
