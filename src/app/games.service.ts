import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Game } from './models/game';
import {environment} from '../environments/environment';
import { HeadersService } from './shared/headers.service';
import { ElasticService } from './shared/elastic.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {
getGamesUrl = environment.esUrl + '/games/_search';

  constructor(private httpService: HttpClient, private headerService: HeadersService) { }

  public getAllGames(): any {
    const customHeader = this.headerService.esCredentialHeader();
    // tslint:disable-next-line:no-shadowed-variable
    return this.httpService.get(this.getGamesUrl, customHeader);
  }


}
