/*import { Routes } from '@angular/router';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { InsertarUsuarioComponent } from './insertar-usuario/insertar-usuario.component';


export const routes: Routes = [
    {
        path: '',
        component: BuscarUsuarioComponent,
        pathMatch: 'full',
    },
    {
        path: 'buscarUsuario',
        component: BuscarUsuarioComponent,
    },
    {
        path: 'insertarUsuario',
        component: InsertarUsuarioComponent,
    },
];
*/
import { Routes } from '@angular/router';
import { BuscarUsuarioComponent } from './buscar-usuario/buscar-usuario.component';
import { InsertarUsuarioComponent } from './insertar-usuario/insertar-usuario.component';
import { VerUsuariosListaComponent } from './ver-usuarios-lista/ver-usuarios-lista.component';
import { ActualizarUsuarioComponent } from './actualizar-usuario/actualizar-usuario.component';
import { EliminarUsuarioComponent } from './eliminar-usuario/eliminar-usuario.component';



export const routes: Routes = [
  { path: "buscarUsuario", component: BuscarUsuarioComponent, pathMatch: 'full' },
  { path: "insertarUsuario", component: InsertarUsuarioComponent, pathMatch: 'full' },
  { path: "verUsuarios", component: VerUsuariosListaComponent, pathMatch: 'full' },
  { path: "editarUsuario/:id", component: ActualizarUsuarioComponent },  // <-- aquí acepta id
  { path: "eliminarUsuario/:id", component: EliminarUsuarioComponent }, // <-- aquí acepta id
  { path: "**", redirectTo: "verUsuarios", pathMatch: 'full' }
];