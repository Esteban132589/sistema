import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProovedoresComponent } from './proovedores.component';
import { AgregarProovedorComponent } from './agregar-proovedor/agregar-proovedor.component';
import { ListaProovedorComponent } from './lista-proovedor/lista-proovedor.component';
import { EditarProovedorComponent } from './editar-proovedor/editar-proovedor.component';

const routes: Routes = [{
  path: '',
  component: ProovedoresComponent,
  children: [
    {
      path:'agregar',
      component: AgregarProovedorComponent
    },
    {
      path:'editar/:id',
      component: EditarProovedorComponent
    },
    {
      path:'lista',
      component: ListaProovedorComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProovedoresRoutingModule { }
