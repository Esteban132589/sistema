import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './clientes.component';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';

const routes: Routes = [{
  path: '',
  component: ClientesComponent,
  children: [
    {
      path:'agregar',
      component: AgregarClienteComponent
    },
    {
      path:'lista',
      component: ListaClienteComponent
    },
    {
      path:'editar/:id',
      component: EditarClienteComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
