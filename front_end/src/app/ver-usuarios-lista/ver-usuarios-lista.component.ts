import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';  // Importa Router
import { UsuarioService } from '../usuario.service';

@Component({
  selector: 'app-ver-usuarios-lista',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ver-usuarios-lista.component.html',
  styleUrls: ['./ver-usuarios-lista.component.css']
})
export class VerUsuariosListaComponent implements OnInit {
  public usuarios: any[] = [];

  constructor(
    public UsuarioService: UsuarioService,
    private router: Router  // Inyecta Router
  ) {}

  ngOnInit() {
    this.getUsuarios();
  }

  async getUsuarios() {
    try {
      this.usuarios = await this.UsuarioService.getAllUsers() as any[];
    } catch (error) {
      console.error('Error al obtener usuarios:', error);
      this.usuarios = [];
    }
  }

  editarUsuario(id: number) {
    this.router.navigate(['/editarUsuario', id]);
  }

  eliminarUsuario(id: number) {
    this.router.navigate(['/eliminarUsuario', id]);
  }

  insertarUsuario() {
    this.router.navigate(['/insertarUsuario']);
  }
  buscarUsuario() {
    this.router.navigate(['/buscarUsuario']);
  }

}
