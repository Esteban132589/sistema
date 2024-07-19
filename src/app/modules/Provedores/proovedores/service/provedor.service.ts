import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ProvedorService {
  isloadingSubject: BehaviorSubject<boolean>
  isloading$: Observable<boolean>

  constructor(
    public httpClient: HttpClient
  ) {
    this.isloadingSubject = new BehaviorSubject<boolean>(false);
    this.isloading$ = this.isloadingSubject.asObservable();
  }

  traerProovedor(){
    let URL = URL_SERVICIOS + '/proveedores';
    this.isloadingSubject.next(true);
    return this.httpClient.get(URL).pipe(
      finalize(() => {this.isloadingSubject.next(false)})
    )
  }

  traerUnProovedor(id: any){
    let URL = URL_SERVICIOS + '/proveedores/' + id;
    this.isloadingSubject.next(true);
    return this.httpClient.get(URL).pipe(
      finalize(() => {this.isloadingSubject.next(false)})
    )
  }

  editarProovedor(data: any, id: any){
    let URL = URL_SERVICIOS+ '/proveedores/' + id;
    this.isloadingSubject.next(true);

    return this.httpClient.post(URL, data).pipe(
      finalize(() => this.isloadingSubject.next(false))
    )
  }

  crearProovedor(data:any){
    let URL = URL_SERVICIOS+ '/proveedores';
    this.isloadingSubject.next(true);

    return this.httpClient.post(URL, data).pipe(
      finalize(() => this.isloadingSubject.next(false))
    )
  }

  eliminarProovedor(id: any){
    let URL = URL_SERVICIOS + "/proveedores/" + id;
    this.isloadingSubject.next(true);

    return this.httpClient.delete(URL).pipe(
      finalize(() => this.isloadingSubject.next(false))
    );
  }
}
