import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ProvedorService } from '../service/provedor.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-eliminar-proovedor',
  templateUrl: './eliminar-proovedor.component.html',
  styleUrls: ['./eliminar-proovedor.component.css']
})
export class EliminarProovedorComponent implements OnInit {
  @Input() proveedor: any;
  @Output() ProveedorD: EventEmitter<any> = new EventEmitter();
  isLoading: any

  constructor(
    public modal: NgbActiveModal,
    public proveedorService: ProvedorService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.proveedorService.isloading$;
  }
  
  eliminarProveedor(){
      this.proveedorService.eliminarProovedor(this.proveedor.id).subscribe((resp: any) =>{
        this.ProveedorD.emit(resp.usuario);
        this.modal.close();
      });
    }
}
