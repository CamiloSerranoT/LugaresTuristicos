import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/service/usuario.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  listaUsuario : Usuario[] = [];

  usuarioSeleccionado : Usuario=new Usuario;

  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.listarUsuarios();
  }

  public listarUsuarios(){
    this.usuarioService.listar().subscribe(lista => {
      this.listaUsuario=lista;
      
    } )
  }

  public verObjeto() 
  {
    console.log(this.usuarioSeleccionado);
  }


}
