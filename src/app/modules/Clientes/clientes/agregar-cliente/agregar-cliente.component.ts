import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';

@Component({
  selector: 'app-agregar-cliente',
  templateUrl: './agregar-cliente.component.html',
  styleUrls: ['./agregar-cliente.component.css']
})
export class AgregarClienteComponent implements OnInit {
  identidad: any = null
  num_identidad: any = null
  nombre: any = null
  telefono: any = null
  correo: any = null
  direccion: any = null
  isLoading: any

  constructor(
    public clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.clienteService.isloading$;
  }

  registrar(){
    let formData = new FormData();
    formData.append("identidad", this.identidad);
    formData.append("num_identidad", this.num_identidad);
    formData.append("nombre", this.nombre);
    formData.append("telefono", this.telefono);
    formData.append("correo", this.correo);
    formData.append("direccion", this.direccion);

    this.clienteService.crearCliente(formData).subscribe((resp: any) => {
      alert("Usuario creado con exito");
      this.identidad = null
      this.num_identidad = null
      this.nombre = null
      this.telefono = null
      this.correo = null
      this.direccion = null
      this.isLoading = null

    })
  }

}
