import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-eliminar-usuario',
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css']
})
export class EliminarUsuarioComponent implements OnInit {
  @Input() usuario: any;
  @Output() UsuarioD: EventEmitter<any> = new EventEmitter();

  isLoading: any

  constructor(
    public modal: NgbActiveModal,
    public usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.usuarioService.isloading$;
  }

  eliminarComponente(){
    this.usuarioService.eliminarUsuario(this.usuario.id).subscribe((resp: any) =>{
      this.UsuarioD.emit(resp.usuario);
      this.modal.close();
    });
  }

}
