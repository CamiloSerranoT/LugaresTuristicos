import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  mensaje:string = "Bienvenido al aplicativo de lugares turisticos";
  constructor() { }

  ngOnInit(): void {
  }

}
