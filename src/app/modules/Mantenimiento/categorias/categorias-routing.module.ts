import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias.component';
import { ListaCategoriaComponent } from './lista-categoria/lista-categoria.component';
import { EditarCategoriaComponent } from './editar-categoria/editar-categoria.component';
import { AgregarCategoriaComponent } from './agregar-categoria/agregar-categoria.component';

const routes: Routes = [{
  path: '',
  component: CategoriasComponent,
  children: [
    {
      path:'lista',
      component: ListaCategoriaComponent
    },
    {
      path:'editar/:id',
      component: EditarCategoriaComponent
    },
    {
      path:'agregar',
      component: AgregarCategoriaComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasRoutingModule { }
