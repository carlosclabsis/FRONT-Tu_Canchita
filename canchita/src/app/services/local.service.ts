import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Local} from '../models/Local';

@Injectable({
  providedIn: 'root'
})


export class LocalService {
  LOCALES: Local[]=[
      {
        local_id:1,
        local_desc:"Jarawa",
        local_lat:-16.424553,
        local_lng:-71.5330768
      },
      {
        local_id:2,
        local_desc:"La Huachita",
        local_lat:-16.4108897,
        local_lng:-71.5232179
      },

  ];
  constructor() {

  }

  getLocales(){
    return (this.LOCALES);
  }
}
