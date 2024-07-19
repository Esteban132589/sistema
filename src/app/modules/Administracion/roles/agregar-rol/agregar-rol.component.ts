import { Component, OnInit } from '@angular/core';
import { RolesService } from '../service/roles.service';

@Component({
  selector: 'app-agregar-rol',
  templateUrl: './agregar-rol.component.html',
  styleUrls: ['./agregar-rol.component.css']
})
export class AgregarRolComponent implements OnInit {
  permisos: any = []
  permisos_enviar: any = []
  rol_nombre: any = null
  isLoading: any 


  constructor(
    public rolService: RolesService
  ) { }

  ngOnInit(): void {
    this.rolService.listaDePermisos().subscribe((resp: any) => {
      this.permisos = resp.roles;
    })
    this.isLoading = this.rolService.isLoading$;
  }

  registrar(){
    let permisos_objeto = this.permisos.filter((e: any, i: any) => this.permisos_enviar[i]);
    let permisos_nombre = permisos_objeto.map((permiso: any) => permiso.nombre);

    let formData = new FormData();
    formData.append("nombre", this.rol_nombre);
    formData.append("permisos", permisos_nombre);

    this.rolService.agregarRol(formData).subscribe((resp: any) => {
      this.permisos_enviar = [];
      this.rol_nombre = null;
    })
  }

}
