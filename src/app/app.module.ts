import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AsideComponent } from './layout/componentes/aside/aside.component';
import { AsideMenuComponent } from './layout/componentes/aside/aside-menu/aside-menu.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LayoutModule } from './layout/layout.module';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MedidasComponent } from './modules/Mantenimiento/medidas/medidas.component';
import { CategoriasComponent } from './modules/Mantenimiento/categorias/categorias.component';
import { ProductosComponent } from './modules/Mantenimiento/productos/productos.component';
// import { ClientesComponent } from './modules/clientes/clientes/clientes.component';
import { ProovedoresComponent } from './modules/Provedores/proovedores/proovedores.component';
import { LogAccesoComponent } from './modules/Administracion/log-acceso/log-acceso.component';
import { LogAccesoListaComponent } from './modules/Administracion/log-acceso/log-acceso-lista/log-acceso-lista.component';
// import { ConfiguracionComponent } from './modules/Administracion/configuracion/configuracion/configuracion.component';

@NgModule({
  declarations: [
    AppComponent,
    MedidasComponent,
    CategoriasComponent,
    ProductosComponent,
    LogAccesoComponent,
    // LogAccesoListaComponent,
    // ClientesComponent,
    // ProovedoresComponent,
    // ConfiguracionComponent,
    // AsideComponent,
    // AsideMenuComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LayoutModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
