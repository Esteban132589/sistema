import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { MedidasService } from '../service/medidas.service';


@Component({
  selector: 'app-eliminar-medida',
  templateUrl: './eliminar-medida.component.html',
  styleUrls: ['./eliminar-medida.component.css']
})
export class EliminarMedidaComponent implements OnInit {
  @Input() medida: any
  @Output() MedidaD: EventEmitter<any> = new EventEmitter();
 
  isLoading: any = null

  constructor(
    public modal: NgbActiveModal,
    public medidasService: MedidasService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.medidasService.isloading$;
  }

  eliminarMedida(){
    this.medidasService.eliminarMedida(this.medida.id).subscribe((resp: any) => {
      this.MedidaD.emit(resp.medida);
      this.modal.close();
    })
  }

}
