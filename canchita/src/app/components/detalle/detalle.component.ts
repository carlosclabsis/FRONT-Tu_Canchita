import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Local } from '../../models/Local';
import { LocalService} from '../../services/local.service';
import { NumberValueAccessor } from '@angular/forms/src/directives';
import { forEach } from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
  providers: [LocalService]
})
export class DetalleComponent implements OnInit {
  locales:Local [] = [];
  public localId:string;
  public local:Local;
  constructor(private _sLocal:LocalService,
              private _route:ActivatedRoute) {
    console.log(this._route.snapshot.paramMap.get('id'));
    this.localId = this._route.snapshot.paramMap.get('id');
    console.log(this.localId);

              }

  ngOnInit() {
    /*this.locales = *//*this._sLocal.getLocales();
    for(let i  in this.locales){
      // console.log(this.locales[i].local_id);
      if(this.locales[i].localId === this.localId){
        this.local = this.locales[i];
        // console.log(this.local.local_nombre);
      }
    }*/
    this._route.params.subscribe(params=>{
      this.localId = params.id;
    });
    this.setearLocal(this.localId);
  }

  setearLocal(id:string){
    this._sLocal.getLocalById(id).subscribe(
      response=>{
        this.local=response.found;
        console.log(this.localId, "aqui");
        //console.log(this.local);
        //console.log(response);
        this.local= response;
        console.log(this.local);
      },
      error=>{
        console.log(error)
      });
  }

}
