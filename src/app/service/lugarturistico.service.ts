import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Lugaresturisticos } from '../models/lugaresturisticos';

@Injectable({
  providedIn: 'root'
})
export class LugarturisticoService {

  private urlEndPoint:string='http://localhost:53145/sitios-turisticos';
  private httpHeaders = new HttpHeaders({'Content-Type':'application/json'});

  constructor(private http:HttpClient) { }

  public listar():Observable<Lugaresturisticos[]>{
    return this.http.get<Lugaresturisticos[]>(this.urlEndPoint);
  }

  public show(id:number):Observable<Lugaresturisticos>{
    return this.http.get<Lugaresturisticos>('${this.urlEndPoint}/${id}');
  }

  public create(lugaresturisticos:Lugaresturisticos):Observable<Lugaresturisticos>{
    return this.http.post<Lugaresturisticos>(this.urlEndPoint,lugaresturisticos,{headers: this.httpHeaders});
  }

  public update(lugaresturisticos:Lugaresturisticos):Observable<Lugaresturisticos>{
    return this.http.put<Lugaresturisticos>('${this.urlEndPoint}/${usuario.id}',lugaresturisticos,{headers:this.httpHeaders});
  }

  public delete (id:number):Observable<void>{
    return this.http.delete<void>('${this.urlEndPoint}/${id}',{headers:this.httpHeaders});
  }
}
