import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { Local } from '../../models/Local';
import { LocalService} from '../../services/local.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  locales:Local [] = [];
  local_id:number;
  local:Local;
  constructor(private _sLocal:LocalService,
              private _route:ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id'));
    this.local_id = parseInt(this._route.snapshot.paramMap.get('id')) ;
    console.log(this.local_id);

              }

  ngOnInit() {
    this.locales = this._sLocal.getLocales();
    for(let i  in this.locales){
      // console.log(this.locales[i].local_id);
      if(this.locales[i].local_id === this.local_id){
        this.local = this.locales[i];
        // console.log(this.local.local_nombre);
      }
    }
  }

}
