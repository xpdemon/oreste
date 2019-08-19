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
  @Input() id: string;
  constructor(private es: ElasticService) { }

  ngOnInit() {
    this.joueur.id = this.id;
  }

  storePseudo(joueur: Joueur){
    localStorage.setItem('current_player', joueur.pseudo);
  }

  deleteJoueur(joueur: Joueur){
    this.es.deleteDoc({
      index: 'joueurs',
      id: joueur.id,
    }).then((result) => {
      console.log(result);
      window.location.reload();
    }, error => {
      console.error(error);
    });
  }
}
