import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-agregar-usuario',
  templateUrl: './agregar-usuario.component.html',
  styleUrls: ['./agregar-usuario.component.css']
})
export class AgregarUsuarioComponent implements OnInit {

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
  }

  registrar(){
    let formData = new FormData();
    formData.append("nombre", this.nombre);
    formData.append("apellido", this.apellido);
    formData.append("email", this.correo);
    formData.append("telefono", this.telefono);
    formData.append("direccion", this.direccion);
    formData.append("password", this.clave);
    formData.append("rol", this.rol);

    this.usuarioService.crearUsuario(formData).subscribe((resp: any) => {
      this.nombre = null;
      this.apellido = null;
      this.correo = null;
      this.telefono = null;
      this.direccion = null;
      this.clave = null;
      this.rol = null;
      return alert("Usuario creado exitosamente")
    })
  }

}
