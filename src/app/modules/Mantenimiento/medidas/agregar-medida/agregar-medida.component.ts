import { Component, OnInit } from '@angular/core';
import { MedidasService } from '../service/medidas.service';

@Component({
  selector: 'app-agregar-medida',
  templateUrl: './agregar-medida.component.html',
  styleUrls: ['./agregar-medida.component.css']
})
export class AgregarMedidaComponent implements OnInit {
  isLoading: any = null
  medida_nombre: any = null
  medida_nombre_corto: any = null

  constructor(
    public medidasService: MedidasService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.medidasService.isloading$;
  }

  registrar(){
    let formData = new FormData();
    formData.append("medida", this.medida_nombre);
    formData.append("nombre_corto", this.medida_nombre_corto);

    this.medidasService.crearMedida(formData).subscribe((resp: any) => {
      this.medida_nombre = null
      this.medida_nombre_corto = null
    })
  }
}
