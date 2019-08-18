import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcom',
  templateUrl: './welcom.component.html',
  styleUrls: ['./welcom.component.scss']
})
export class WelcomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    localStorage.clear();
  }

  storeRole(role: string){
    localStorage.setItem('role', role);
  }

}
