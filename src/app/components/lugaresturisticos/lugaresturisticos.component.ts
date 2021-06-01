import { Component, OnInit } from '@angular/core';
import { Lugaresturisticos } from 'src/app/models/lugaresturisticos';
import { LugarturisticoService } from 'src/app/service/lugarturistico.service';

@Component({
  selector: 'app-lugaresturisticos',
  templateUrl: './lugaresturisticos.component.html',
  styleUrls: ['./lugaresturisticos.component.css']
})
export class LugaresturisticosComponent implements OnInit {

  listaLugaresTuristicos : Lugaresturisticos[] = [];

  lugaresTuristicosSeleccionado : Lugaresturisticos=new Lugaresturisticos;

  constructor(private lugaresTuristicosService:LugarturisticoService) { }

  ngOnInit(): void {
    this.listarSitios();
  }

  public listarSitios(){
    this.lugaresTuristicosService.listar().subscribe(lista => {
      this.listaLugaresTuristicos=lista;
      console.log(lista);
    } )
  }

  public verObjeto() 
  {
    console.log(this.lugaresTuristicosSeleccionado);
  }

}
