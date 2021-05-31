import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private urlEndPoint:string='http://localhost:53144/usuarios';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  public listar():Observable<Usuario[]>{
    return this.http.get<Usuario[]>(this.urlEndPoint);
  }

  public show(id:number):Observable<Usuario>{
    return this.http.get<Usuario>('${this.urlEndPoint}/${id}');
  }

  public create(usuario:Usuario):Observable<Usuario>{
    return this.http.post<Usuario>(this.urlEndPoint,usuario,{headers: this.httpHeaders});
  }

  public update(usuario:Usuario):Observable<Usuario>{
    return this.http.put<Usuario>('${this.urlEndPoint}/${usuario.id}',usuario,{headers:this.httpHeaders});
  }

  public delete (id:number):Observable<void>{
    return this.http.delete<void>('${this.urlEndPoint}/${id}',{headers:this.httpHeaders});
  }

}
