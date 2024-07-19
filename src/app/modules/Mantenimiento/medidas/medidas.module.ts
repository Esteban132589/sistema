import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MedidasRoutingModule } from './medidas-routing.module';
import { AgregarMedidaComponent } from './agregar-medida/agregar-medida.component';
import { EditarMedidaComponent } from './editar-medida/editar-medida.component';
import { EliminarMedidaComponent } from './eliminar-medida/eliminar-medida.component';
import { ListaMedidaComponent } from './lista-medida/lista-medida.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AgregarMedidaComponent,
    EditarMedidaComponent,
    EliminarMedidaComponent,
    ListaMedidaComponent
  ],
  imports: [
    CommonModule,
    MedidasRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule
  ]
})
export class MedidasModule { }
