import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-categoria',
  templateUrl: './editar-categoria.component.html',
  styleUrls: ['./editar-categoria.component.css']
})
export class EditarCategoriaComponent implements OnInit {
  categoria_nombre: any = null
  isLoading: any = null
  categoria: any = null

  constructor(
    public categoriaService: CategoriaService,
    public activeRouter: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading = this.categoriaService.isloading$;
    this.activeRouter.params.subscribe((resp: any) => {
      this.mostrarCategoria(resp.id);
    })
  }

  mostrarCategoria(id: any){
    this.categoriaService.traerUnaCategoria(id).subscribe((resp: any) => {
      this.categoria_nombre = resp.categoria.categoria;
      this.categoria = resp.categoria;
    })
  }

  registrar(){
    let formData = new FormData();
    formData.append("categoria", this.categoria_nombre);

    this.categoriaService.editarCategoria(formData, this.categoria.id).subscribe((resp: any) => {
      console.log(resp, "respuesta")
    })
  }

}
