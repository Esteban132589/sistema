import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';
import { URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class AccesoService {
  isloadingSubject: BehaviorSubject<boolean>;
  isloading$: Observable<boolean>;

  constructor(
    private httpClient: HttpClient
  ) {
    this.isloadingSubject = new BehaviorSubject<boolean>(false);
    this.isloading$ = this.isloadingSubject.asObservable();
  }

  listaDeAcceso(){
    let URL = URL_SERVICIOS + '/acceso';
    this.isloadingSubject.next(true);

    return this.httpClient.get(URL).pipe(
      finalize(() => this.isloadingSubject.next(false))
    )
  }
}
