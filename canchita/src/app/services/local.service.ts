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
        local_descripcion:"Local deportivo ubicado en una zona centrica, cuenta con 2 canchas de grass sintetico.",
        local_nombre:"Jarawa",
        local_direccion:"Av. Dolores s/n.",
        local_hora_apertura:"10:00",
        local_hora_cierre:"23:00",
        dist_id:2,    // FK de distrito al que pertenece el local
        local_telefono:"054-243446",
        local_lat:-16.424553,
        local_lng:-71.5330768
      },
      {
        local_id:2,
        local_descripcion:"Local deportivo ubicado en el parque industrial, cuenta con 2 canchas de grass sintetico y estacionamiento.",
        local_nombre:"La Huachita",
        local_direccion:"Parque Industrial, frente a Chevrolet",
        local_hora_apertura:"12:00",
        local_hora_cierre:"23:00",
        dist_id:4,    // FK de distrito al que pertenece el local
        local_telefono:"054-478292",
        local_lat:-16.4108897,
        local_lng:-71.5232179
      }

  ];
  constructor() {

  }

  getLocales(){
    return (this.LOCALES);
  }
}
