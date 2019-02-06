import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Local } from '../../models/Local';
import { LocalService } from '../../services/local.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css'],
  providers: [LocalService]
})
export class GrillaComponent implements OnInit{
  public aux:Array<Local>= new Array();
  Locales:Local [] = [];
  constructor(private _sLocal:LocalService) {
    
   }

  ngOnInit(){
    this.getLocales();
  }
  public getLocales(){
    this._sLocal.getLocales().subscribe(
      response=>{
        console.log(response);
        
        for (let i=0;i<response.length; i++){

          //this.aux.push(response.locales[i]);
          this.Locales.push(response[i]);
          /*if(i==response.locales.length-1){
            this.Locales.push(this.aux);
          }*/
        }
        console.log(this.Locales);
      },
      error=>{
        console.log(error);
      }
    )
  }
  
  

}
