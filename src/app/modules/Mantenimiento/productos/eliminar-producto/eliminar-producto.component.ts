import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-eliminar-producto',
  templateUrl: './eliminar-producto.component.html',
  styleUrls: ['./eliminar-producto.component.css']
})
export class EliminarProductoComponent implements OnInit {
  @Input() producto: any;
  @Output() ProductoD: EventEmitter<any> = new EventEmitter();
  
  isLoading: any = null
  constructor(
    public modal: NgbActiveModal,
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.productoService.isloading$;
  }

  eliminarComponente(){
    this.productoService.eliminarProducto(this.producto.id).subscribe((resp: any) => {
      this.ProductoD.emit(resp.producto);
      this.modal.dismiss();
    })
  }

}
