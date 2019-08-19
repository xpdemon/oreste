import { Component, OnInit } from '@angular/core';
import { ElasticService } from '../shared/elastic.service';
import { JoueurSource } from './joueur.Interface';
import { GameSource } from '../models/game';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.component.html',
  styleUrls: ['./joueurs.component.scss']
})
export class JoueursComponent implements OnInit {

  private static readonly INDEX = 'joueurs';
  joueurSources: JoueurSource[];
  gamesources: GameSource[];
  form: FormGroup;
  constructor(private es: ElasticService) {
    this.form = new FormGroup({
      pseudo: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {
    this.getAlljoueurs();
  }

  getAlljoueurs() {
    this.es.getAllDocuments(JoueursComponent.INDEX)
      .then(response => {
        this.joueurSources = response.hits.hits;
        console.log(response);
      }, error => {
        console.log(error);
      });
  }


  onSubmit(value) {
    this.es.createDoc({
      index: 'joueurs',
      id: value.pseudo,
      body: {
        pseudo: value.pseudo
      }
    }).then((result) => {
      console.log(result);
      window.location.reload();
    }, error => {
      console.error(error);
    });
  }
}
