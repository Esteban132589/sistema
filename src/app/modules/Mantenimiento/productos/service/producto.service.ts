import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  isloadingSubject: BehaviorSubject<boolean>
  isloading$: Observable<boolean>

  constructor(
    public httpClient: HttpClient
  ) {
    this.isloadingSubject = new BehaviorSubject<boolean>(false);
    this.isloading$ = this.isloadingSubject.asObservable();
  }

   
  traerProductos(){
    let URL = URL_SERVICIOS + '/productos';
    this.isloadingSubject.next(true);
    return this.httpClient.get(URL).pipe(
      finalize(() => {this.isloadingSubject.next(false)})
    )
  }

  traerUnProducto(id: any){
    let URL = URL_SERVICIOS + '/productos/' + id;
    this.isloadingSubject.next(true);
    return this.httpClient.get(URL).pipe(
      finalize(() => {this.isloadingSubject.next(false)})
    )
  }

  editarProducto(data: any, id: any){
    let URL = URL_SERVICIOS+ '/productos/' + id;
    this.isloadingSubject.next(true);

    return this.httpClient.post(URL, data).pipe(
      finalize(() => this.isloadingSubject.next(false))
    )
  }

  crearProducto(data:any){
    let URL = URL_SERVICIOS+ '/productos';
    this.isloadingSubject.next(true);

    return this.httpClient.post(URL, data).pipe(
      finalize(() => this.isloadingSubject.next(false))
    )
  }

  eliminarProducto(id: any){
    let URL = URL_SERVICIOS + "/productos/" + id;
    this.isloadingSubject.next(true);

    return this.httpClient.delete(URL).pipe(
      finalize(() => this.isloadingSubject.next(false))
    );
  }

  traerCategorias(){
    let URL = URL_SERVICIOS + "/productos/categorias";
    this.isloadingSubject.next(true);

    return this.httpClient.get(URL).pipe(
      finalize(() => this.isloadingSubject.next(false))
    );
  }

  traerMedidas(){
    let URL = URL_SERVICIOS + "/productos/medidas";
    this.isloadingSubject.next(true);

    return this.httpClient.get(URL).pipe(
      finalize(() => this.isloadingSubject.next(false))
    );
  }
}
