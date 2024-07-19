import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EliminarProductoComponent } from '../eliminar-producto/eliminar-producto.component';

@Component({
  selector: 'app-lista-producto',
  templateUrl: './lista-producto.component.html',
  styleUrls: ['./lista-producto.component.css']
})
export class ListaProductoComponent implements OnInit {
  lista_productos: any = []
  isLoading: any = null
  IMAGEN_PREVISUALIZADA: any = "../../../../../assets/producto_por_defecto.png"

  constructor(
    public productoService: ProductoService,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.isLoading = this.productoService.isloading$;
    this.productoService.traerProductos().subscribe((resp: any) => {
      this.lista_productos = resp.productos;
    })
  }

  eliminarProducto(producto: any){
    const modalRef = this.modalService.open(EliminarProductoComponent, {centered: true, size: 'md'});
    modalRef.componentInstance.producto = producto; 
    modalRef.componentInstance.ProductoD.subscribe((resp_id : any) => {
      let INDEX = this.lista_productos.findIndex((producto: any) => producto.id == resp_id);
      this.lista_productos.splice(INDEX,1);
    })
  }

}
