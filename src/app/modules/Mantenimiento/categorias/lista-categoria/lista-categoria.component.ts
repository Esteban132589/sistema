import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EliminarCategoriaComponent } from '../eliminar-categoria/eliminar-categoria.component';

@Component({
  selector: 'app-lista-categoria',
  templateUrl: './lista-categoria.component.html',
  styleUrls: ['./lista-categoria.component.css']
})
export class ListaCategoriaComponent implements OnInit {
  isLoading: any = null
  lista_de_categorias: any = []

  constructor(
    public categoriaService: CategoriaService,
    public modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.isLoading = this.categoriaService.isloading$;
    this.categoriaService.traerCategorias().subscribe((resp: any) => {
      this.lista_de_categorias = resp.categorias;
    })

  }

  eliminarCategoria(categoria: any){
    const modalRef = this.modalService.open(EliminarCategoriaComponent, {centered: true, size: 'md'});
    modalRef.componentInstance.categoria = categoria; 
    modalRef.componentInstance.CategoriaD.subscribe((resp_id : any) => {
      let INDEX = this.lista_de_categorias.findIndex((categoria: any) => categoria.id == resp_id);
      this.lista_de_categorias.splice(INDEX,1);
    })
  }

}
