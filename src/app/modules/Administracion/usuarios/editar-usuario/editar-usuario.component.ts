import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  roles: any = []
  usuario: any = null
  nombre: any = null
  apellido: any = null
  correo: any = null
  telefono: any = null
  direccion: any = null
  clave: any = null
  rol: any =null
  isLoading: any = null
  usuario_id: any = null

  constructor(
    public usuarioService: UsuarioService,
    public activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = this.usuarioService.isloading$;
    this.usuarioService.listaDeRoles().subscribe((resp: any) => {
      this.roles = resp.roles;
    })

    this.activeRouter.params.subscribe((respuesta: any) =>{
      this.usuario_id = respuesta.id;
      this.mostrarUsuario(respuesta.id);
    })
  }

  mostrarUsuario(id: number){
    this.usuarioService.mostrarUnUsuario(id).subscribe((respuesta: any) => {
      this.usuario = respuesta.usuario;
      this.nombre = respuesta.usuario.nombre;
      this.apellido = respuesta.usuario.apellido;
      this.correo = respuesta.usuario.correo;
      this.direccion = respuesta.usuario.direccion;
      // this.clave = respuesta.usuario.
      this.telefono = respuesta.usuario.telefono;
      this.rol = respuesta.usuario.rol.id
    });
  }

  registrar(){
    let formData = new FormData();
    formData.append("nombre", this.nombre);
    formData.append("apellido", this.apellido);
    formData.append("email", this.correo);
    formData.append("telefono", this.telefono);
    formData.append("direccion", this.direccion);
    formData.append("clave", this.clave);
    formData.append("rol", this.rol);
    
    this.usuarioService.editarUsuario(this.usuario_id, formData).subscribe(
      (resp) => {return alert("Usuario editado con exito")}
    );
  }

}
