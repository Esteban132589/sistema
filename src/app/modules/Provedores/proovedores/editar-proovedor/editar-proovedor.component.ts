import { Component, OnInit } from '@angular/core';
import { ProvedorService } from '../service/provedor.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-proovedor',
  templateUrl: './editar-proovedor.component.html',
  styleUrls: ['./editar-proovedor.component.css']
})
export class EditarProovedorComponent implements OnInit {
  ruc: any = null
  nombre: any = null
  telefono: any = null
  correo: any = null
  direccion: any = null
  proveedor_id: any = null
  isLoading: any

  constructor(
    public proveedorService: ProvedorService,
    public activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = this.proveedorService.isloading$;
    this.activatedRouter.params.subscribe((resp: any) => {
      this.mostrarProveedor(resp.id);
    })
  }

  mostrarProveedor(id: any){
    this.proveedorService.traerUnProovedor(id).subscribe((resp: any) => {
      this.proveedor_id = resp.id;
      this.ruc = resp.ruc;
      this.nombre = resp.nombre;
      this.telefono = resp.telefono;
      this.correo = resp.correo;
      this.direccion = resp.direccion;
    })
  }

  registrar(){
    let formData = new FormData();
    formData.append("ruc",this.ruc);
    formData.append("nombre",this.nombre);
    formData.append("telefono",this.telefono);
    formData.append("correo",this.correo);
    formData.append("direccion",this.direccion);

    this.proveedorService.editarProovedor(formData, this.proveedor_id).subscribe((resp:any) => {
      alert("usuario editado correctamente");
      console.log(resp, "respuesta")
    })
  }

}
