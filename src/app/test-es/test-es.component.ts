import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ElasticService} from '../shared/elastic.service';

@Component({
  selector: 'app-test-es',
  templateUrl: './test-es.component.html',
  styleUrls: ['./test-es.component.scss']
})
export class TestEsComponent implements OnInit {
isConnected = false;
status: string;
  constructor(private es: ElasticService, private cd: ChangeDetectorRef) {
    this.isConnected = false;
   }

  ngOnInit() {
    this.es.isAvailable().then(() => {
      this.status = 'OK';
      this.isConnected = true;
    }, error => {
      this.status = 'ERROR';
      this.isConnected = false;
      console.error('Server is Down', error);
    }).then(() => {
    this.cd.detectChanges();
   });

  }

}
