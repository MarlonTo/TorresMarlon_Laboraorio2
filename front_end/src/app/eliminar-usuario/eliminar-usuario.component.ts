import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../usuario.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar-usuario',
  standalone: true,
  templateUrl: './eliminar-usuario.component.html',
  styleUrls: ['./eliminar-usuario.component.css'],
  imports: []
})
export class EliminarUsuarioComponent implements OnInit {

  public idusuario!: number;

  constructor(
    private UsuarioService: UsuarioService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.idusuario = +this.route.snapshot.paramMap.get('id')!;
    this.eliminar();
  }

  async eliminar() {
    try {
      await this.UsuarioService.deletUser(this.idusuario);
      alert('Usuario eliminado correctamente');
      this.router.navigate(['/verUsuarios']);
    } catch (error) {
      console.error('Error al eliminar usuario:', error);
      alert('Error al eliminar usuario');
      this.router.navigate(['/verUsuarios']);
    }
  }
}
