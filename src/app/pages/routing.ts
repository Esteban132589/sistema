import { Routes } from '@angular/router';

const Routing: Routes = [
    {
        path: 'usuarios',
        loadChildren: () => import('../modules/Administracion/usuarios/usuarios.module').then((m) => m.UsuariosModule)
    }
];

export { Routing }
