import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class RolesService {
  isLoadingSubject: BehaviorSubject<boolean>
  isLoading$: Observable<boolean>

  constructor(
    public httpClient: HttpClient
  ) {
    this.isLoadingSubject = new BehaviorSubject<boolean>(false);
    this.isLoading$ = this.isLoadingSubject.asObservable();
  }

  listaDeRoles(){
    let URL = URL_SERVICIOS + '/rol';
    this.isLoadingSubject.next(true);

    return this.httpClient.get(URL).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    )
  }

  listaDePermisos(){
    let URL = URL_SERVICIOS + '/permisos';
    this.isLoadingSubject.next(true);

    return this.httpClient.get(URL).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    )
  }

  agregarRol(data: any){
    let URL = URL_SERVICIOS + "/rol";
    this.isLoadingSubject.next(true);

    return this.httpClient.post(URL, data).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    );
  }

  mostrarUnRol(id: any){
    let URL = URL_SERVICIOS + "/rol/" + id;
    this.isLoadingSubject.next(true);

    return this.httpClient.get(URL).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    )
  }

  agregarUnRol(data: any, id: any){
    let URL = URL_SERVICIOS + "/rol/" + id;
    this.isLoadingSubject.next(true);

    return this.httpClient.post(URL, data).pipe(
      finalize(() => this.isLoadingSubject.next(false))
    )
  }

}
