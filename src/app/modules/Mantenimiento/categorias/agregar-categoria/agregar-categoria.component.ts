import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-agregar-categoria',
  templateUrl: './agregar-categoria.component.html',
  styleUrls: ['./agregar-categoria.component.css']
})
export class AgregarCategoriaComponent implements OnInit {
  categoria_nombre: any = null
  isLoading: any = null

  constructor(
    public categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.categoriaService.isloading$;
  }

  registrar(){
    let formData = new FormData();
    formData.append("categoria", this.categoria_nombre);

    this.categoriaService.crearCategoria(formData).subscribe((resp: any) => {
      alert("Usuario creado con exito!");
      this.categoria_nombre = null;
    })
  }

}
