import { Component, OnInit } from '@angular/core';
import { RolesService } from '../service/roles.service';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.css']
})
export class ListaRolesComponent implements OnInit {
  listaRoles: any = []
  isLoading: any

  constructor(
    public rolesService: RolesService
  ) { }

  ngOnInit(): void {
    this.rolesService.listaDeRoles().subscribe((resp: any) => {
      console.log(resp)
      this.listaRoles = resp.roles;
    })
    this.isLoading = this.rolesService.isLoading$;
  }

  eliminarRol(){
    
  }

}
