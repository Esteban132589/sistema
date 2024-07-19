import { Component, OnInit } from '@angular/core';
import { MedidasService } from '../service/medidas.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EliminarMedidaComponent } from '../eliminar-medida/eliminar-medida.component';

@Component({
  selector: 'app-lista-medida',
  templateUrl: './lista-medida.component.html',
  styleUrls: ['./lista-medida.component.css']
})
export class ListaMedidaComponent implements OnInit {
  isLoading: any = null
  lista_de_medidas: any = []

  constructor(
    public medidasService: MedidasService,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.isLoading = this.medidasService.isloading$;
    this.medidasService.traerMedidas().subscribe((resp: any) => {
      this.lista_de_medidas = resp.medidas;
    })
  }

  eliminarMedida(medida: any){
    const modalRef = this.modalService.open(EliminarMedidaComponent, {centered: true, size: 'md'});
    modalRef.componentInstance.medida = medida; 
    modalRef.componentInstance.MedidaD.subscribe((resp_id : any) => {
      let INDEX = this.lista_de_medidas.findIndex((medida: any) => medida.id == resp_id);
      this.lista_de_medidas.splice(INDEX,1);
    })
  }

}
