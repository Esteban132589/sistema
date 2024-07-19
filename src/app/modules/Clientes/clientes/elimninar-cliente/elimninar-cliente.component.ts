import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-elimninar-cliente',
  templateUrl: './elimninar-cliente.component.html',
  styleUrls: ['./elimninar-cliente.component.css']
})
export class ElimninarClienteComponent implements OnInit {
  @Input() cliente: any
  @Output() ClienteD: EventEmitter<any> = new EventEmitter();
  isLoading: any

  constructor(
    public modal: NgbActiveModal,
    public clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.clienteService.isloading$;
  }

  eliminarCliente(){
    this.clienteService.eliminarCliente(this.cliente.id).subscribe((resp: any) => {
      this.ClienteD.emit(resp.cliente);
      this.modal.close();
    })
  }

}
