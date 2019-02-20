import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-personas',
  templateUrl: './listado-personas.component.html',
  styleUrls: ['./listado-personas.component.css']
})
export class ListadoPersonasComponent implements OnInit {

  personas: any[] = [
    {
      'name': 'Douglas  Pace',
      'age': 35,
      'country': 'MARS'
    },
    {
      'name': 'Mcleod  Mueller',
      'age': 32,
      'country': 'USA'
    },
    {
      'name': 'Day  Meyers',
      'age': 21,
      'country': 'HK'
    },
    {
      'name': 'Aguirre  Ellis',
      'age': 34,
      'country': 'UK'
    },
    {
      'name': 'Cook  Tyson',
      'age': 32,
      'country': 'USA'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

  getColor(pais) {
    switch(pais) {
      case 'UK':
        return 'red';
      case 'USA':
        return 'blue';
      case 'HK':
        return 'green';
      default:
        return 'orange';
    }
  }

}
