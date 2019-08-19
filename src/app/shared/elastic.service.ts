import { Injectable } from '@angular/core';
import { Client } from 'elasticsearch';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ElasticService {
  private client: Client;

  private queryalldocs = {
    'query': {
      'match_all': {}
    }
  };

  constructor() {
    if (!this.client) {
      this.connect();
    }
  }

  private connect() {
    this.client = new Client({
      host: environment.esUrl,
      httpAuth: environment.token,
      log: 'trace'

    });
  }

  private _connect() {
    this.client = new Client({
      host: environment.esUrl,
      httpAuth: environment.token,
      log: 'trace'


    });
  }

  isAvailable(): any {
    return this.client.ping({
      requestTimeout: Infinity,
      body: 'HELLO'
    });
  }

  getAllDocuments(_index): any {
    return this.client.search({
      index: _index,
      body: this.queryalldocs,
      filterPath: ['hits.hits']
    });
  }

  getAllWithParam(_index, param): any {
    return this.client.search({
      index: _index,
      body: {
        'query': {
          'term': {
            'joueur': {
              'value': param
            }
          }
        }
      }
    });
  }

  createDoc(value):any{
    return this.client.create(value);
  }

  deleteDoc(value):any{
    return this.client.delete(value);
  }

}

