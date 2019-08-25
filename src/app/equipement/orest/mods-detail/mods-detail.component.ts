import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Mods } from '../mods.interface';

@Component({
  selector: 'app-mods-detail',
  templateUrl: './mods-detail.component.html',
  styleUrls: ['./mods-detail.component.scss']
})
export class ModsDetailComponent implements OnInit {

  @Input() mods: Mods;
  @Input() id: string;
  @Output() selectedMods = new EventEmitter<Mods>();

  constructor() { }

  ngOnInit() {
    this.mods.id = this.id
  }

  getId(){
    this.selectedMods.emit(this.mods);
  }

}
