import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EliminarUsuarioComponent } from '../eliminar-usuario/eliminar-usuario.component';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  listaUsuarios: any = []
  isLoading: any 

  constructor(
    public userService: UsuarioService,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.obtenerUsuarios();
    this.isLoading = this.userService.isloading$;

  }

  obtenerUsuarios(){
    this.userService.listaDeUsuarios().subscribe((res: any) => {
      this.listaUsuarios = res.users;
    })
  }

  eliminarUsuario(usuario: any){
    const modalRef = this.modalService.open(EliminarUsuarioComponent, {centered: true, size: 'md'});
    modalRef.componentInstance.usuario = usuario; 
    modalRef.componentInstance.UsuarioD.subscribe((resp_id : any) => {
      let INDEX = this.listaUsuarios.findIndex((usuario: any) => usuario.id == resp_id);
      this.listaUsuarios.splice(INDEX,1);
    })
  }

}
