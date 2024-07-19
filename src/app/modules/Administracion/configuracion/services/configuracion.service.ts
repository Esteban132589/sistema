import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, finalize, Observable } from 'rxjs';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class ConfiguracionService {
  isloadingSubject: BehaviorSubject<boolean>
  isloading$: Observable<boolean>

  constructor(
    public httpClient: HttpClient,
  ) {
    this.isloadingSubject = new BehaviorSubject<boolean>(false);
    this.isloading$ = this.isloadingSubject.asObservable();
  }

  obtenerDatos(){
    let URL = URL_SERVICIOS + '/configuracion';
    this.isloadingSubject.next(true);
    return this.httpClient.get(URL).pipe(
      finalize(() => {this.isloadingSubject.next(false)})
    )
  }

  agregarConfiguracion(data: any, id: any){
      let URL = URL_SERVICIOS+ '/configuracion/' + id;
      this.isloadingSubject.next(true);
  
      return this.httpClient.post(URL, data).pipe(
        finalize(() => this.isloadingSubject.next(false))
      )
  }
}
