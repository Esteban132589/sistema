import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  isloadingSubject: BehaviorSubject<boolean>
  isloading$: Observable<boolean>

  constructor(
    public httpClient: HttpClient,
  ) {
    this.isloadingSubject = new BehaviorSubject<boolean>(false);
    this.isloading$ = this.isloadingSubject.asObservable();
  }

  listaDeUsuarios(){
    let URL = URL_SERVICIOS + '/usuario';
    this.isloadingSubject.next(true);
    return this.httpClient.get(URL).pipe(
      finalize(() => {this.isloadingSubject.next(false)})
    )
  }

  mostrarUnUsuario(id: number){
    let URL = URL_SERVICIOS + '/usuario/' + id;
    this.isloadingSubject.next(true);
    return this.httpClient.get(URL).pipe(
      finalize(() => {this.isloadingSubject.next(false)})
    )
  }

  listaDeRoles(){
    let URL = URL_SERVICIOS + '/usuario/roles';
    this.isloadingSubject.next(true);
    return this.httpClient.get(URL).pipe(
      finalize(() => {this.isloadingSubject.next(false)})
    )
  }

  editarUsuario(id: number, data: any){
    let URL = URL_SERVICIOS + '/usuario/' + id;
    this.isloadingSubject.next(true);

    return this.httpClient.post(URL, data).pipe(
      finalize(() => this.isloadingSubject.next(false))
    )
  }

  crearUsuario(data: any){
    let URL = URL_SERVICIOS+ '/usuario';
    this.isloadingSubject.next(true);

    return this.httpClient.post(URL, data).pipe(
      finalize(() => this.isloadingSubject.next(false))
    )
  }

  eliminarUsuario(id: any){
    let URL = URL_SERVICIOS + "/usuario/" + id;
    this.isloadingSubject.next(true);

    return this.httpClient.delete(URL).pipe(
      finalize(() => this.isloadingSubject.next(false))
    );
  }
}
