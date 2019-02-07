import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders} from './app.routing';  // SE EXPORTA HACIA MODULE
import { HttpClientModule } from '@angular/common/http';    // SE EXPORTA HACIA MODULE

import { AppComponent } from './app.component';
import { ListaComponent } from './components/lista/lista.component';
import { GrillaComponent } from './components/grilla/grilla.component';
import { ConcurridosComponent } from './components/concurridos/concurridos.component';
import { ReservasComponent } from './components/reservas/reservas.component';
import { MensajesComponent } from './components/mensajes/mensajes.component';
import { NuevaReservaComponent } from './components/nueva-reserva/nueva-reserva.component';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AgmCoreModule } from '@agm/core';
import { MapaComponent } from './components/mapa/mapa.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { CanchaComponent } from './components/cancha/cancha.component';


@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
    GrillaComponent,
    ConcurridosComponent,
    ReservasComponent,
    MensajesComponent,
    NuevaReservaComponent,
    MapaComponent,
    DetalleComponent,
    CanchaComponent,
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAmSnVsm-cvVZ26BEwCrYhbaWCZuRqWdXY'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
