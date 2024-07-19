import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, of } from 'rxjs';
import { URL_FROTEND, URL_SERVICIOS } from 'src/app/config/config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  usuario:any = null
  token: any = null

  constructor(
    public httpClient: HttpClient,
    public router: Router
  ) {
    this.initAuth();
  }
  initAuth(){
    if(localStorage.getItem('token')){
      this.usuario = localStorage.getItem('usuario') ? JSON.parse(localStorage.getItem('usuario') ?? '') : null;
      this.token = localStorage.getItem('token');
    }
  }

  login(email: string, password: string){
    let URL = URL_SERVICIOS + "/auth/login";
    return this.httpClient.post(URL, {email: email, password: password}).pipe(
      map((auth: any) => {
        const result = this.guardarLocalStorage(auth);
        return result;
      }),
      catchError((err) => {
        console.error('error',err);
        return of(undefined);
      })
    )
  }

  registrar(data:any){
    let URL = URL_SERVICIOS + "/auth/register"
    return this.httpClient.post(URL, data)
  }
  
  guardarLocalStorage(auth: any){
    if(auth && auth.access_token){
      localStorage.setItem('token', auth.access_token);
      localStorage.setItem('usuario', JSON.stringify(auth.usuario));
      return true;
    }
    return false;
  }

  logout(){
    let URL = URL_SERVICIOS + "/auth/logout";
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    setTimeout(() => {
      location.href = URL_FROTEND + "/auth/login";
    }, 50);

    return this.httpClient.post(URL, null).pipe(
      catchError((err) => {
        console.error('error',err);
        return of(undefined);
      })
    )
  }
}
