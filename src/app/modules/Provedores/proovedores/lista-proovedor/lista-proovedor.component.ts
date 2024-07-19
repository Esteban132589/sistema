import { Component, OnInit } from '@angular/core';
import { ProvedorService } from '../service/provedor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EliminarProovedorComponent } from '../eliminar-proovedor/eliminar-proovedor.component';

@Component({
  selector: 'app-lista-proovedor',
  templateUrl: './lista-proovedor.component.html',
  styleUrls: ['./lista-proovedor.component.css']
})
export class ListaProovedorComponent implements OnInit {
  isLoading: any
  lista_proovedores: any = []

  constructor(
    public proovedorService: ProvedorService,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.isLoading = this.proovedorService.isloading$;
    this.proovedorService.traerProovedor().subscribe((resp:any) => {
      this.lista_proovedores = resp.proveedores;
    })
  }

  eliminarProveedor(proveedor: any){
    const modalRef = this.modalService.open(EliminarProovedorComponent, {centered: true, size: 'md'});
    modalRef.componentInstance.proveedor = proveedor; 
    modalRef.componentInstance.ProveedorD.subscribe((resp_id : any) => {
      let INDEX = this.lista_proovedores.findIndex((proveedor: any) => proveedor.id == resp_id);
      this.lista_proovedores.splice(INDEX,1);
    })
  }

}
