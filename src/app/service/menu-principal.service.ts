import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../models/usuario";

@Injectable({
  providedIn: 'root'
})
export class MenuPrincipalService {

  constructor(private http:HttpClient) { }

  login(user: Usuario): Observable<any> {
    return this.http.post("http://localhost:53144/login", user);
  }
}
