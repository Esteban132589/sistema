import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientesRoutingModule } from './clientes-routing.module';
import { AgregarClienteComponent } from './agregar-cliente/agregar-cliente.component';
import { EditarClienteComponent } from './editar-cliente/editar-cliente.component';
import { ElimninarClienteComponent } from './elimninar-cliente/elimninar-cliente.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ClientesComponent } from './clientes.component';


@NgModule({
  declarations: [
    ClientesComponent,
    AgregarClienteComponent,
    EditarClienteComponent,
    ElimninarClienteComponent,
    ListaClienteComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule
  ]
})
export class ClientesModule { }
