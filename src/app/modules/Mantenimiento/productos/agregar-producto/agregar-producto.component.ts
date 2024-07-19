import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.component.html',
  styleUrls: ['./agregar-producto.component.css']
})
export class AgregarProductoComponent implements OnInit {
  lista_de_categorias: any = []
  lista_de_medidas: any = []
  producto: any = null
  isLoading: any = null
  IMAGEN_PREVISUALIZADA: any = null
  foto: any 
  
  codigo: any = null
  descripcion: any = null
  precio_compra: any = null
  precio_venta: any = null
  medida: any = null
  categoria: any = null

  constructor(
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.productoService.isloading$;
    this.traerOpciones();
  }

  traerOpciones(){
    this.productoService.traerMedidas().subscribe((resp: any) => {
      this.lista_de_medidas = resp.medidas;
    })
    this.productoService.traerCategorias().subscribe((resp: any) => {
      this.lista_de_categorias = resp.categorias;
    })
  }

  procesarPerfil($event: any){
    if($event.target.files[0].type.indexOf("image") < 0){
      alert("no es imagen");
      return;
    }
    this.foto = $event.target.files[0];
    let result = new FileReader();
    result.readAsDataURL($event.target.files[0]);
    result.onloadend = () => this.IMAGEN_PREVISUALIZADA = result.result;
  }

  registrar(){
    let formData = new FormData();
    formData.append("codigo", this.codigo);
    formData.append("descripcion", this.descripcion);
    formData.append("precio_compra", this.precio_compra);
    formData.append("precio_venta", this.precio_venta);
    formData.append("id_medida", this.medida);
    formData.append("id_categoria", this.categoria);
    if(this.foto){
      formData.append("imagen", this.foto);
    }

    this.productoService.crearProducto(formData).subscribe((resp: any) => {
      alert("Producto creado con exito")
      this.codigo = null
      this.descripcion = null
      this.precio_compra = null
      this.precio_venta = null
      this.medida = null
      this.categoria = null
      this.foto = null
    })
  }

}
