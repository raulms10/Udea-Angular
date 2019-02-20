import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  public saludo: String;
  public nombre: String;
  //comentario
  ocultar =  false;

  constructor() { }

  ngOnInit() {
    this.saludo = 'Hola ';
    this.nombre = '';
  }

  cambiarHidden() {
    this.ocultar =  !this.ocultar;
  }

}
