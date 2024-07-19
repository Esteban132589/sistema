import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuariosComponent } from './usuarios.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { AgregarUsuarioComponent } from './agregar-usuario/agregar-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuariosComponent,
    children: [
      {
        path: 'lista',
        component: ListaUsuarioComponent
      },
      {
        path: 'editar/:id',
        component: EditarUsuarioComponent
      },
      {
        path: 'agregar',
        component: AgregarUsuarioComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
