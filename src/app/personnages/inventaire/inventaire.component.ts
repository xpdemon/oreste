import { Component, OnInit, Input } from '@angular/core';
import { Inventaire } from '../inventaire.interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ElasticService } from 'src/app/shared/elastic.service';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.scss']
})
export class InventaireComponent implements OnInit {

  @Input() inventaire: Inventaire;
  @Input() id: string;
  vallonForm: FormGroup;
  objetForm: FormGroup;

  constructor(private es: ElasticService) {
    this.vallonForm = new FormGroup({
      vallon: new FormControl('', Validators.required)
    });
    this.objetForm = new FormGroup({
      item: new FormControl('', Validators.required)
    });
  }

  ngOnInit() {

  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';
    document.getElementById('burger').style.visibility = 'hidden';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
    document.getElementById('burger').style.visibility = 'visible';
  }

  changeVallon(value) {
    this.inventaire.argent = this.inventaire.argent + value.vallon;
    this.updateInventaire();
  }

  suppItem(index) {
    this.inventaire.objet.splice(index, 1);
    this.updateInventaire();
  }

  addItem(value) {
    this.inventaire.objet.push(value.item);
    this.updateInventaire();
  }

  updateInventaire() {
    this.es.createDoc({
      index: 'invetaire',
      id: this.inventaire.id,
      objet: this.inventaire.objet,
      argent: this.inventaire.argent
    }).then((result) => {
      console.log(result);
    }, error => { console.log(error); });
  }

}
