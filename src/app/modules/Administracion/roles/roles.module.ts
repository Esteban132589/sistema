import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolesRoutingModule } from './roles-routing.module';
import { ListaRolesComponent } from './lista-roles/lista-roles.component';
import { EliminarRolComponent } from './eliminar-rol/eliminar-rol.component';
import { AgregarRolComponent } from './agregar-rol/agregar-rol.component';
import { EditarRolComponent } from './editar-rol/editar-rol.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RolesComponent } from './roles.component';


@NgModule({
  declarations: [
    ListaRolesComponent,
    EliminarRolComponent,
    AgregarRolComponent,
    EditarRolComponent,
    RolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule
  ]
})
export class RolesModule { }
