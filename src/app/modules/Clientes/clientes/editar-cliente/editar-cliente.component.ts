import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {
  identidad: any = null
  num_identidad: any = null
  nombre: any = null
  telefono: any = null
  correo: any = null
  direccion: any = null
  cliente_id: any = null
  isLoading: any

  constructor(
    public activedRouter: ActivatedRoute,
    public clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.clienteService.isloading$;
    this.activedRouter.params.subscribe((resp: any) => {
      this.traerCliente(resp.id);
    })
  }

  traerCliente(id: any){
    this.clienteService.traerUnCliente(id).subscribe((resp: any) => {
      console.log(resp, "cliente");
      this.identidad = resp.identidad
      this.num_identidad = resp.num_identidad
      this.nombre = resp.nombre
      this.telefono = resp.telefono
      this.correo = resp.correo
      this.direccion = resp.direccion
      this.cliente_id = resp.id
    })
  }

  registrar(){
    let formData = new FormData();
    formData.append("identidad", this.identidad);
    formData.append("num_identidad", this.num_identidad);
    formData.append("nombre", this.nombre);
    formData.append("telefono", this.telefono);
    formData.append("correo", this.correo);
    formData.append("direccion", this.direccion);

    this.clienteService.editarCliente(formData, this.cliente_id).subscribe((resp: any) => {
      console.log(resp);
    })
  }

}
