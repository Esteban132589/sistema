import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../service/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-producto',
  templateUrl: './editar-producto.component.html',
  styleUrls: ['./editar-producto.component.css']
})
export class EditarProductoComponent implements OnInit {
  lista_de_categorias: any = []
  lista_de_medidas: any = []
  producto_id: any = null
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
    public productoService: ProductoService,
    public activatedRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = this.productoService.isloading$;
    
    this.activatedRouter.params.subscribe((resp: any) => {
      this.mostrarProducto(resp.id);
    })

    this.mostrarOpciones();
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

  mostrarProducto(id: any){
    this.productoService.traerUnProducto(id).subscribe((resp: any) => {
      this.producto_id = resp.id;
      this.codigo = resp.codigo;
      this.descripcion = resp.descripcion;
      this.precio_compra = resp.precio_compra;
      this.precio_venta = resp.precio_venta;
      this.medida = resp.medida;
      this.categoria = resp.categoria;
      this.IMAGEN_PREVISUALIZADA = resp.foto ? resp.foto : null;
    })
  }

  mostrarOpciones(){
    this.productoService.traerMedidas().subscribe((resp: any) => {
      this.lista_de_medidas = resp.medidas;
    })
    this.productoService.traerCategorias().subscribe((resp: any) => {
      this.lista_de_categorias = resp.categorias;
    })
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

    this.productoService.editarProducto(formData, this.producto_id).subscribe((resp: any) => {
      alert("Producto editado con exito")
    })
  }

}
