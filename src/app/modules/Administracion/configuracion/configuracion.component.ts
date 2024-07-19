import { Component, OnInit } from '@angular/core';
import { ConfiguracionService } from './services/configuracion.service';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  ruc: any = null
  nombre: any = null
  telefono: any = null
  correo: any = null                       
  direccion: any = null
  impuesto: any = null
  isLoading: any
  perfil: any
  IMAGEN_PREVISUALIZADA: any = null
  configuracion_id: any = null

  constructor(
    public configuracionService: ConfiguracionService
  ) { }

  ngOnInit(): void {
    this.configuracionService.obtenerDatos().subscribe((resp: any) => {
      let datos = resp.datos_de_configuracion[0]
      this.ruc = datos.ruc;
      this.nombre = datos.nombre;
      this.telefono = datos.telefono;
      this.correo = datos.correo;
      this.direccion = datos.direccion;
      this.impuesto = datos.impuesto;
      this.configuracion_id = datos.id;
      this.IMAGEN_PREVISUALIZADA = datos.perfil;
    });
    this.isLoading = this.configuracionService.isloading$;
  }

  procesarPerfil($event: any){
    if($event.target.files[0].type.indexOf("image") < 0){
      alert("no es imagen");
      return;
    }
    this.perfil = $event.target.files[0];
    let result = new FileReader();
    result.readAsDataURL($event.target.files[0]);
    result.onloadend = () => this.IMAGEN_PREVISUALIZADA = result.result;
  }

  actualizar(){
    let formData = new FormData();
    formData.append("ruc", this.ruc)
    formData.append("nombre", this.nombre)
    formData.append("telefono", this.telefono)
    formData.append("correo", this.correo)
    formData.append("direccion", this.direccion)
    formData.append("impuesto", this.impuesto)
    formData.append("imagen", this.perfil)

    this.configuracionService.agregarConfiguracion(formData, this.configuracion_id).subscribe((resp: any) => {
      console.log(resp);
    });

    console.log(this.perfil, "imaaaageenn")
  }

}
