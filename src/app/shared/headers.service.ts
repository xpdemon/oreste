import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeadersService {



  constructor() { }

  esCredentialHeader() {
    const httpOptions = {
      headers: new HttpHeaders({Authorization: 'Basic eHIzbmZ4N25kdTp1bnM2a2ViYXht'})};
    return httpOptions;
    }
  }

