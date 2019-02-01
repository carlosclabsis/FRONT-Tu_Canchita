import { Component, OnInit, AfterContentInit } from '@angular/core';
import { Local } from '../../models/Local';
import { LocalService } from '../../services/local.service';

@Component({
  selector: 'app-grilla',
  templateUrl: './grilla.component.html',
  styleUrls: ['./grilla.component.css']
})
export class GrillaComponent implements OnInit{
  Locales:Local [] = [];
  constructor(private _sLocal:LocalService) { }

  ngOnInit(){
    this.Locales = this._sLocal.getLocales();
  }
  
  

}
