import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogAccesoComponent } from './log-acceso.component';
import { LogAccesoListaComponent } from './log-acceso-lista/log-acceso-lista.component';

const routes: Routes = [{
  path: '',
  component: LogAccesoComponent,
  children: [{
    path: 'lista',
    component: LogAccesoListaComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogAccesoRoutingModule { }
