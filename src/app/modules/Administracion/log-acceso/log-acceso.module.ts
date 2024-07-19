import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogAccesoRoutingModule } from './log-acceso-routing.module';
import { LogAccesoListaComponent } from './log-acceso-lista/log-acceso-lista.component';


@NgModule({
  declarations: [
    LogAccesoListaComponent
  ],
  imports: [
    CommonModule,
    LogAccesoRoutingModule
  ]
})
export class LogAccesoModule { }
