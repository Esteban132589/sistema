import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProovedoresRoutingModule } from './proovedores-routing.module';
import { AgregarProovedorComponent } from './agregar-proovedor/agregar-proovedor.component';
import { EditarProovedorComponent } from './editar-proovedor/editar-proovedor.component';
import { EliminarProovedorComponent } from './eliminar-proovedor/eliminar-proovedor.component';
import { ListaProovedorComponent } from './lista-proovedor/lista-proovedor.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProovedoresComponent } from './proovedores.component';


@NgModule({
  declarations: [
    ProovedoresComponent,
    AgregarProovedorComponent,
    EditarProovedorComponent,
    EliminarProovedorComponent,
    ListaProovedorComponent
  ],
  imports: [
    CommonModule,
    ProovedoresRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule
  ]
})
export class ProovedoresModule { }
