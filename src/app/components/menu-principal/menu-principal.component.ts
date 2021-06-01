import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { MenuPrincipalService } from 'src/app/service/menu-principal.service';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  user !: string;
  password !: string;

  constructor(private menuService:MenuPrincipalService) { }

  ngOnInit(): void {
  }
  

  public login(){
    let usuario = new Usuario();
    usuario.user = this.user;
    usuario.password = this.password;
    this.menuService.login(usuario).subscribe(respuesta => {
      alert(respuesta);
    } )
  }

}

