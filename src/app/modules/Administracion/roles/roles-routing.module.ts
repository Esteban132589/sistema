import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RolesComponent } from './roles.component';
import { ListaRolesComponent } from './lista-roles/lista-roles.component';
import { EditarRolComponent } from './editar-rol/editar-rol.component';
import { AgregarRolComponent } from './agregar-rol/agregar-rol.component';

const routes: Routes = [
  {
    path: '',
    component: RolesComponent,
    children: [
      {
        path: 'lista',
        component: ListaRolesComponent
      },
      {
        path: 'editar/:id',
        component: EditarRolComponent
      },
      {
        path: 'agregar',
        component: AgregarRolComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RolesRoutingModule { }
