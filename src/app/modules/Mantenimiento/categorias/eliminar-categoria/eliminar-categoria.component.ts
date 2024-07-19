import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategoriaService } from '../service/categoria.service';

@Component({
  selector: 'app-eliminar-categoria',
  templateUrl: './eliminar-categoria.component.html',
  styleUrls: ['./eliminar-categoria.component.css']
})
export class EliminarCategoriaComponent implements OnInit {
  @Input()categoria: any
  @Output() CategoriaD: EventEmitter<any> = new EventEmitter();
  isLoading: any = null

  constructor(
    public modal: NgbActiveModal,
    public categoriaService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.isLoading = this.categoriaService.isloading$;
  }

  eliminarCategoria(){
    this.categoriaService.eliminarMedida(this.categoria.id).subscribe((resp: any) => {
      this.CategoriaD.emit(resp.medida);
      this.modal.close();
    })
  }

}
