import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  usuario:any = null
  mostrar: any = false
  mostrarM: any = false

  constructor(
    public authService: AuthService
  ) { }
  

  ngOnInit(): void {
    this.usuario = this.authService.usuario;
  }

  mostrarAcordeon(){
    this.mostrar = !this.mostrar;
  }

  mostrarMantenimiento(){
    this.mostrarM = !this.mostrarM;
  }

  verificarPermiso(permiso: any){
    console.log(permiso, )
  }
}
