import { Component, OnInit } from '@angular/core';
import { ProvedorService } from '../service/provedor.service';

@Component({
  selector: 'app-agregar-proovedor',
  templateUrl: './agregar-proovedor.component.html',
  styleUrls: ['./agregar-proovedor.component.css']
})
export class AgregarProovedorComponent implements OnInit {
  ruc: any = null
  nombre: any = null
  telefono: any = null
  correo: any = null
  direccion: any = null
  isLoading: any

  constructor(
    public proveedorService: ProvedorService,
  ) { }

  ngOnInit(): void {
    this.isLoading = this.proveedorService.isloading$;
  }

  registrar(){
    let formData = new FormData();
    formData.append("ruc",this.ruc);
    formData.append("nombre",this.nombre);
    formData.append("telefono",this.telefono);
    formData.append("correo",this.correo);
    formData.append("direccion",this.direccion);

    this.proveedorService.crearProovedor(formData).subscribe((resp:any) => {
      alert("usuario creado correctamente");
      this.ruc = null
      this.nombre = null
      this.telefono = null
      this.correo = null
      this.direccion = null
    })

  }
}
