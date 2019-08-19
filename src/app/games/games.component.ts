import { Component, OnInit } from '@angular/core';
import { GameSource } from '../models/game';
import { ElasticService } from '../shared/elastic.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';





@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  gamesSources: GameSource[];
  form: FormGroup;


  constructor(private es: ElasticService) {

    this.form = new FormGroup({
      nom: new FormControl('', Validators.required),
      image: new FormControl('', Validators.required),
    });
  }

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



  onSubmit(value) {
    if (value.nom == '' || value.image == '') {
    } else {
      this.es.createDoc({
        index: 'games',
        id: value.nom,
        body: {
          nom: value.nom,
          image: value.image
        }
      }).then((result) => {
        console.log(result);
        window.location.reload();
      }, error => {
        console.error(error);
      });

    }
  }
}
