import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';

@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.css']
})
export class AsideComponent implements OnInit {
  usuario:any = null
  constructor(
    public authService: AuthService
  ) { }
  

  ngOnInit(): void {
    this.usuario = this.authService.usuario;
  }

}
