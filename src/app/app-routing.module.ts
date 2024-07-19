import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './modules/auth/services/auth.guard';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
  // },

  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'usuarios',
    canActivate:[AuthGuard] ,
    loadChildren: () => import('./modules/Administracion/usuarios/usuarios.module').then((m) => m.UsuariosModule)
  },
  {
    path: 'roles',
    canActivate:[AuthGuard] ,
    loadChildren: () => import('./modules/Administracion/roles/roles.module').then((m) => m.RolesModule)
  },
  {
    path: 'admin',
    canActivate:[AuthGuard] ,
    loadChildren: () => import('./modules/Administracion/configuracion/configuracion.module').then((m) => m.ConfiguracionModule)
  },
  {
    path: 'medidas',
    canActivate:[AuthGuard] ,
    loadChildren: () => import('./modules/Mantenimiento/medidas/medidas.module').then((m) => m.MedidasModule)
  },
  {
    path: 'categorias',
    canActivate:[AuthGuard] ,
    loadChildren: () => import('./modules/Mantenimiento/categorias/categorias.module').then((m) => m.CategoriasModule)
  },
  {
    path: 'productos',
    canActivate:[AuthGuard] ,
    loadChildren: () => import('./modules/Mantenimiento/productos/productos.module').then((m) => m.ProductosModule)
  },
  {
    path: 'proveedores',
    canActivate:[AuthGuard] ,
    loadChildren: () => import('./modules/Provedores/proovedores/proovedores.module').then((m) => m.ProovedoresModule)
  },
  {
    path: 'clientes',
    canActivate:[AuthGuard] ,
    loadChildren: () => import('./modules/Clientes/clientes/clientes.module').then((m) => m.ClientesModule)
  },
  {
    path: 'acceso',
    canActivate:[AuthGuard] ,
    loadChildren: () => import('./modules/Administracion/log-acceso/log-acceso.module').then((m) => m.LogAccesoModule)
  },
  {
    path: '**',
    redirectTo : 'auth'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
