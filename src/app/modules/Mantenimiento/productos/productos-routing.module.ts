import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos.component';
import { ListaProductoComponent } from './lista-producto/lista-producto.component';
import { AgregarProductoComponent } from './agregar-producto/agregar-producto.component';
import { EditarProductoComponent } from './editar-producto/editar-producto.component';

const routes: Routes = [{
  path: '',
  component: ProductosComponent,
  children: [
    {
      path: 'lista',
      component: ListaProductoComponent
    },
    {
      path: 'agregar',
      component: AgregarProductoComponent
    },
    {
      path: 'editar/:id',
      component: EditarProductoComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
