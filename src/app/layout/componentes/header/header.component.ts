import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  usuario:any = null
  nombre: any = null
  email: any = null

  constructor(
    public authService: AuthService
  ) { }

  ngOnInit(): void {
    this.usuario = this.authService.usuario
    this.nombre = this.authService.usuario.nombre;
    this.email = this.authService.usuario.email;
  }

  logout(){
    this.authService.logout();
  }

}
