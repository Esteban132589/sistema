import { Component, OnInit } from '@angular/core';
import { AccesoService } from '../log-acceso-service/acceso.service';

@Component({
  selector: 'app-log-acceso-lista',
  templateUrl: './log-acceso-lista.component.html',
  styleUrls: ['./log-acceso-lista.component.css']
})
export class LogAccesoListaComponent implements OnInit {
  lista_acciones: any = []

  constructor(
    private accesoService: AccesoService
  ) { }

  ngOnInit(): void {
    this.accesoService.listaDeAcceso().subscribe((resp: any) =>{
      console.log(resp, "yaaa")
      this.lista_acciones = resp.acceso;
    })
  }

}
