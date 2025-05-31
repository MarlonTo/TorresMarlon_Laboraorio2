import { Component } from '@angular/core'; 
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';  // Importar Router

@Component({
  selector: 'app-buscar-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './buscar-usuario.component.html',
  styleUrls: ['./buscar-usuario.component.css'],
})
export class BuscarUsuarioComponent {
  public usuario: any;
  public cedula!: string;
  public nombre!: string;
  public telefono!: string;
  public direccion!: string;
  public correo!: string;

  // Inyectar Router correctamente en el constructor
  constructor(
    public UsuarioService: UsuarioService,
    private router: Router
  ) {}

  async getUsuarioByCedula() {
    try {
      this.usuario = await this.UsuarioService.getUserByCedula(this.cedula!);
      if(this.usuario) {
        this.nombre = this.usuario.nombreusuario;
        this.cedula = this.usuario.cedulausuario;
        this.direccion = this.usuario.direccionusuario;
        this.telefono = this.usuario.telefonousuario;
        this.correo = this.usuario.correousuario;
      } else {
        this.nombre = '';
        this.direccion = '';
        this.telefono = '';
        this.correo = '';
        console.warn('Usuario no encontrado');
      }
    } catch (error) {
      console.log(error);
      this.nombre = '';
      this.direccion = '';
      this.telefono = '';
      this.correo = '';
    }
  }

  verUsuarios() {
    this.router.navigate(['/verUsuarios']);
  }
}
