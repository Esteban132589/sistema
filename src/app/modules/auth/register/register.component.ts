import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  nombre: any = null
  apellido: any = null
  password: any = null
  password_confirmation: any= null
  email:any = null
  telefono: any = null
  direccion: any = null

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.usuario){
      this.router.navigateByUrl("usuarios/lista");
    }
  }

  registrar(){
    let data = {
      email: this.email,
      password: this.password,
      apellido: this.apellido,
      telefono: this.telefono,
      direccion: this.direccion,
      nombre: this.nombre
    }

    if(this.password !== this.password_confirmation){
      return alert("Las contraseñas no son iguales")
    }

    this.authService.registrar(data).subscribe((resp) => {
      alert("EL USUARIO SE CRE EXITOSAMENTE")
      this.email = null
      this.password = ""
      this.apellido = null
      this.telefono = null
      this.direccion = null
      this.nombre = null
    }, error => {
      alert("ALGO SALIO MAL")
    })
  }

}
