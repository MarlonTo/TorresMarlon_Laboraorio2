import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsuarioService } from '../usuario.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-insertar-usuario',
  standalone : true,
  imports: [FormsModule],
  templateUrl: './insertar-usuario.component.html',
  styleUrl: './insertar-usuario.component.css'
})
export class InsertarUsuarioComponent {
  
  public cedula! : string;
  public nombre!: string;
  public direccion!: string;
  public telefono! : string;
  public correo! : string;
  

  constructor(public UsuarioService : UsuarioService,private router: Router) { } 

  async saveNewUsuarioOnBDD(){
    try {
      let newUsuario = this.buildAndGetNewUsuarioObject();
      await this.UsuarioService.saveUsuario(newUsuario);
      console.log("El usuario ha sido registrado con exito");
    } catch (error) {
        console.log(error);
    }
  }

  buildAndGetNewUsuarioObject(){
    let newUsuario = {
      nombreusuario: this.nombre,
      cedulausuario: this.cedula,
      telefonousuario: this.telefono,
      direccionusuario: this.direccion,
      correousuario: this.correo
    }
    return newUsuario;
  }
    verUsuarios() {
    this.router.navigate(['/verUsuarios']);
  }
}
