import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-usuario-servicio',
  imports: [FormsModule, CommonModule, HttpClientModule],
  templateUrl: './usuario-servicio.component.html',
  styleUrls: ['./usuario-servicio.component.css'],
  standalone: true
})
export class UsuarioServicioComponent {
  private url = 'http://localhost:3000/usuario/';
  public cedula: string = '';
  public usuario: any;
  public nombre: string | undefined;  
  public direccion: string | undefined;
  public telefono: string | undefined;
  public correo: string | undefined;
  loading = true;

  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.loadCedulaAndFetchUser();
  }

  private async loadCedulaAndFetchUser(): Promise<void> {
    try {
      const params = await firstValueFrom(this.route.queryParams);
      this.cedula = params['cedula'] || '';
      if (this.cedula) {
        await this.getUsuarioData();
      }
    } catch (error) {
      console.error('Error obteniendo la cédula:', error);
      alert('No se pudo obtener la cédula del usuario.');
    }
  }

async getUsuarioData(): Promise<void> {
  this.loading = true;
  try {
    this.usuario = await this.fetchUsuario(this.cedula);
    console.log('Datos usuario recibidos:', this.usuario);
  } catch (error) {
    console.error('Error fetching user data:', error);
    alert('Error al obtener los datos del usuario. Por favor, inténtelo de nuevo más tarde.');
  } finally {
    this.loading = false;
  }
}

  private async fetchUsuario(cedula: string): Promise<any> {
    return await firstValueFrom(this.http.get(this.url + 'buscarUsuarioCedula/' + cedula));
  }
}
