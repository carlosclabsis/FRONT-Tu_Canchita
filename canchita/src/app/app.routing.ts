import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { Route } from '@angular/compiler/src/core';

import { ListaComponent } from './components/lista/lista.component';
import { GrillaComponent} from './components/grilla/grilla.component';
import { ConcurridosComponent} from './components/concurridos/concurridos.component';
import { ReservasComponent} from './components/reservas/reservas.component';



const appRoutes:Routes = [
    {
        path: '',
        component: GrillaComponent
    },
    {
        path: 'lista',
        component: ListaComponent
    },
    {
        path: 'concurridos',
        component: ConcurridosComponent
    },
    {
        path: 'reservas',
        component: ReservasComponent
    }
]

export const appRoutingProviders: any[] = [];    // SE IMPORTA DESDE MODULE
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);