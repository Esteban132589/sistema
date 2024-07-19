import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedidasComponent } from './medidas.component';
import { ListaMedidaComponent } from './lista-medida/lista-medida.component';
import { EditarMedidaComponent } from './editar-medida/editar-medida.component';
import { AgregarMedidaComponent } from './agregar-medida/agregar-medida.component';

const routes: Routes = [{
  path: '',
  component: MedidasComponent,
  children: [
    {
      path: 'lista',
      component: ListaMedidaComponent
    },
    {
      path: 'editar/:id',
      component: EditarMedidaComponent
    },
    {
      path: 'agregar',
      component: AgregarMedidaComponent
    },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedidasRoutingModule { }
