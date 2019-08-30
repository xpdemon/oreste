import { Component, OnInit,Input } from '@angular/core';
import { Inventaire } from '../inventaire.interface';

@Component({
  selector: 'app-inventaire',
  templateUrl: './inventaire.component.html',
  styleUrls: ['./inventaire.component.scss']
})
export class InventaireComponent implements OnInit {

  @Input() inventaire: Inventaire;
  @Input() id: string;

  constructor() { }

  ngOnInit() {
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '250px';}

    closeNav() {
      document.getElementById('mySidenav').style.width = '0';}

}
