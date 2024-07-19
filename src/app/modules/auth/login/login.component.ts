import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: any = null
  password: any = null 

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    if(this.authService.usuario){
      this.router.navigateByUrl("usuarios/lista");
    }
  }

  login(){
    //FALTAN VALIDACIONES FORMULARIO
    this.authService.login(this.email, this.password).subscribe((resp) => {
      if(resp){
        window.location.reload();
      }else{
        alert("LOS DATOS NO SON CORRECTOS")
      }
    })
  }

}
