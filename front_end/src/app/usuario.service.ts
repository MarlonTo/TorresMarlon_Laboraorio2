import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url = "http://localhost:3000/usuario/";

  constructor(public http: HttpClient, public https: HttpClient) { }

  getUserByCedula(cedula: string){

    return new Promise(resolve => {
      this.http.get(this.url + 'buscarUsuarioCedula/' + cedula).subscribe({
        next : (data) => {
          resolve(data);
        },
        error: (err) =>{
          console.log(err);
        }
      });
    });
  }

  saveUsuario(data: any){
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'insertarUsuario', data).subscribe({
        next: (data) =>{
          resolve(data);
        },
        error: (err) =>{
          console.log(err);
        }
      });
    });
  }

  getAllUsers() {
    return new Promise(resolve => {
      this.http.get(this.url + 'consultarUsuarios').subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }
  getById(id: number) {
    return new Promise(resolve => {
      this.http.get(this.url + 'buscarUsuarioId/' + id).subscribe({
        next: (data) => {
          resolve(data);
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }
  updateUsuario(id: number, data: any) {
    return new Promise((resolve, reject) => {
      this.http.put(this.url + 'actualizarUsuario/' + id, data).subscribe({
        next: (res) => resolve(res),
        error: (err) => {
          console.error(err);
          reject(err);
        }
      });
    });
  }
  deletUser(id: number) {  // Nota: mejor 'deleteUser' (delete en inglés)
    return new Promise((resolve, reject) => {
      this.http.delete(this.url + 'eliminarUsuario/' + id).subscribe({
        next: (res) => resolve(res),
        error: (err) => {
          console.error('Error en deleteUser:', err);
          reject(err);
        }
      });
    });
  }

}
