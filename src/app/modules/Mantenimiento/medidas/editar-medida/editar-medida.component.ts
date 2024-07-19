import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MedidasService } from '../service/medidas.service';

@Component({
  selector: 'app-editar-medida',
  templateUrl: './editar-medida.component.html',
  styleUrls: ['./editar-medida.component.css']
})
export class EditarMedidaComponent implements OnInit {
  isLoading: any = null
  medida: any = null
  medida_nombre: any = null
  medida_nombre_corto: any = null
  medida_id: any = null

  constructor(
    public activeRouter: ActivatedRoute,
    public medidasService: MedidasService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.medidasService.isloading$;
    this.activeRouter.params.subscribe((resp: any) => {
      this.medida_id = resp.id;
      this.mostrarMedida(resp.id);
    })
  }

  mostrarMedida(id: any){
    this.medidasService.traerUnaMedida(id).subscribe((resp: any) => {
      this.medida = resp.medida;
      this.medida_nombre = resp.medida.medida;
      this.medida_nombre_corto = resp.medida.nombre_corto;
      console.log(resp, "respuesta editar")
    })
  }

  registrar(){
    let formData = new FormData();
    formData.append("medida", this.medida_nombre);
    formData.append("nombre_corto", this.medida_nombre_corto);

    this.medidasService.editarMedida(formData, this.medida_id).subscribe((resp: any) => {
    })
  }

}
