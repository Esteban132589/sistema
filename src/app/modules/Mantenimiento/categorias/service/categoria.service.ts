import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  isloadingSubject: BehaviorSubject<boolean>
  isloading$: Observable<boolean>

  constructor(
    public httpClient: HttpClient
  ) {
    this.isloadingSubject = new BehaviorSubject<boolean>(false);
    this.isloading$ = this.isloadingSubject.asObservable();
  }

  
  traerCategorias(){
    let URL = URL_SERVICIOS + '/categorias';
    this.isloadingSubject.next(true);
    return this.httpClient.get(URL).pipe(
      finalize(() => {this.isloadingSubject.next(false)})
    )
  }

  traerUnaCategoria(id: any){
    let URL = URL_SERVICIOS + '/categorias/' + id;
    this.isloadingSubject.next(true);
    return this.httpClient.get(URL).pipe(
      finalize(() => {this.isloadingSubject.next(false)})
    )
  }

  editarCategoria(data: any, id: any){
    let URL = URL_SERVICIOS+ '/categorias/' + id;
    this.isloadingSubject.next(true);

    return this.httpClient.post(URL, data).pipe(
      finalize(() => this.isloadingSubject.next(false))
    )
  }

  crearCategoria(data:any){
    let URL = URL_SERVICIOS+ '/categorias';
    this.isloadingSubject.next(true);

    return this.httpClient.post(URL, data).pipe(
      finalize(() => this.isloadingSubject.next(false))
    )
  }

  eliminarMedida(id: any){
    let URL = URL_SERVICIOS + "/categorias/" + id;
    this.isloadingSubject.next(true);

    return this.httpClient.delete(URL).pipe(
      finalize(() => this.isloadingSubject.next(false))
    );
  }
}
