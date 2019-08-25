import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Mods, ModsSources } from '../mods.interface';

@Component({
  selector: 'app-mods',
  templateUrl: './mods.component.html',
  styleUrls: ['./mods.component.scss']
})
export class ModsComponent implements OnInit {

  @Output() selectedMod = new EventEmitter<Mods>();
  @Input() modsSources: ModsSources[];
  mod: Mods;

  constructor() { }

  ngOnInit() {
  }

  modToSend(mod:Mods){
    this.mod = mod;
    this.selectedMod.emit(this.mod);
  }

}
