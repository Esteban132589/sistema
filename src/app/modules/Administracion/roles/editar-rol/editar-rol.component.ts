import { Component, OnInit } from '@angular/core';
import { RolesService } from '../service/roles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-rol',
  templateUrl: './editar-rol.component.html',
  styleUrls: ['./editar-rol.component.css']
})
export class EditarRolComponent implements OnInit {

  permisos: any = []
  permisos_enviar: any = []
  permisos_checked: any = []
  isLoading: any 
  rol_nombre: any = null
  rol_id: any = null

  constructor(
    public rolService: RolesService,
    public activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = this.rolService.isLoading$;
    this.activeRouter.params.subscribe((resp: any) => {
      this.rol_id = resp.id;
      this.mostrarRol(resp.id);
    });
    this.rolService.listaDePermisos().subscribe((resp: any) => {
      this.permisos = resp.roles;
      
    });
    
  }

  mostrarRol(id: any){
    this.rolService.mostrarUnRol(id).subscribe((resp: any) => {
      this.permisos_enviar = resp.permisos;
      this.rol_nombre = resp.nombre;
    })
  }

  registrar(){
    let formData = new FormData();
    formData.append("nombre", this.rol_nombre);
    formData.append("permisos", this.permisos_enviar);
    // this.rolService.

    this.rolService.agregarUnRol(formData, this.rol_id).subscribe((resp: any) => {
      console.log(resp, "respuesta final")
    })
  }

  verificar(permiso: any){
    let posicion = this.permisos_enviar.indexOf(permiso.nombre);

    if(posicion === -1){
      this.permisos_enviar.push(permiso.nombre)
    }else{
      this.permisos_enviar.splice(posicion, 1)
    }
  }

  verificarCheck(rol: any){
    return this.permisos_enviar.includes(rol.nombre);
  }
}
