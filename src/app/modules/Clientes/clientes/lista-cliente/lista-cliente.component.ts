import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../service/cliente.service';
import { ElimninarClienteComponent } from '../elimninar-cliente/elimninar-cliente.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-lista-cliente',
  templateUrl: './lista-cliente.component.html',
  styleUrls: ['./lista-cliente.component.css']
})
export class ListaClienteComponent implements OnInit {
  lista_clientes: any = []
  isLoading: any

  constructor(
    public clienteService: ClienteService,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.isLoading = this.clienteService.isloading$;
    this.clienteService.traerClientes().subscribe((resp: any) => {
      this.lista_clientes = resp.clientes;
    })
  }

  eliminarCliente(cliente: any){
    const modalRef = this.modalService.open(ElimninarClienteComponent, {centered: true, size: 'md'});
    modalRef.componentInstance.cliente = cliente; 
    modalRef.componentInstance.ClienteD.subscribe((resp_id : any) => {
      let INDEX = this.lista_clientes.findIndex((cliente: any) => cliente.id == resp_id);
      this.lista_clientes.splice(INDEX,1);
    })
  }

}
