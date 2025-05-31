import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-usuario',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './actualizar-usuario.component.html',
  styleUrls: ['./actualizar-usuario.component.css']
})
export class ActualizarUsuarioComponent implements OnInit {

  public idusuario!: number;
  public nombre: string = '';
  public cedula: string = '';
  public telefono: string = '';
  public direccion: string = '';
  public correo: string = '';

  constructor(
    public UsuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idusuario = +this.route.snapshot.paramMap.get('id')!;
    this.cargarUsuario();
  }

  async cargarUsuario() {
    try {
      let usuario = await this.UsuarioService.getById(this.idusuario) as any;
      console.log('Usuario recibido:', usuario);

      // Si la respuesta es un array, tomar el primer elemento
      if (Array.isArray(usuario)) {
        usuario = usuario[0];
      }

      if (usuario) {
        this.nombre = usuario.nombreusuario;
        this.cedula = usuario.cedulausuario;
        this.telefono = usuario.telefonousuario;
        this.direccion = usuario.direccionusuario;
        this.correo = usuario.correousuario;
      } else {
        alert('Usuario no encontrado');
        this.router.navigate(['/verUsuarios']);
      }
    } catch (error) {
      console.error('Error al cargar usuario:', error);
      alert('Error al cargar usuario');
      this.router.navigate(['/verUsuarios']);
    }
  }

  async actualizar() {
    const data = {
      nombreusuario: this.nombre,
      cedulausuario: this.cedula,
      telefonousuario: this.telefono,
      direccionusuario: this.direccion,
      correousuario: this.correo
    };
    try {
      await this.UsuarioService.updateUsuario(this.idusuario, data);
      alert('Usuario actualizado correctamente');
      this.router.navigate(['/verUsuarios']);
    } catch (error) {
      console.error('Error al actualizar usuario:', error);
      alert('Error al actualizar usuario');
    }
  }

  public cancelar() {
    this.router.navigate(['/verUsuarios']);
  }
}
