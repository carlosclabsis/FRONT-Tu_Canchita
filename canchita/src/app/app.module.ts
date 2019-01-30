import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders} from './app.routing';  // SE EXPORTA HACIA MODULE
import { HttpClientModule } from '@angular/common/http';    // SE EXPORTA HACIA MODULE

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { GrillaComponent } from './components/grilla/grilla.component';
import { ConcurridosComponent } from './components/concurridos/concurridos.component';
import { ReservasComponent } from './components/reservas/reservas.component';




@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    GrillaComponent,
    ConcurridosComponent,
    ReservasComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
