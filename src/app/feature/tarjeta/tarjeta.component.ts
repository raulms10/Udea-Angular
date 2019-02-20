import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { noConflict } from 'q';

@Component({
  selector: 'app-tarjeta',
  templateUrl: './tarjeta.component.html',
  styleUrls: ['./tarjeta.component.css']
})
export class TarjetaComponent implements OnInit {

  id: String;
  nombre: String;

  tarjetas: any[] = [
    {
      'titulo': 'Tarjeta 1',
      'contenido' : ' Descripcion de tarjeta 1'
    },
    {
      'titulo': 'Tarjeta 2',
      'contenido' : ' Descripcion de tarjeta 2'
    },
    {
      'titulo': 'Tarjeta 3',
      'contenido' : ' Descripcion de tarjeta 3'
    }
  ];
  constructor(private route: ActivatedRoute) {
      this.route.params.subscribe( (parama) =>  {
        if (parama['id'] !== undefined) {
          this.id = parama.id;
        }
      });

      this.route.queryParams.subscribe((queryParams) => {
        if (queryParams['nombre'] !== undefined) {
          this.nombre = queryParams.nombre;
        }
      });

  }

  ngOnInit() {
  }

}
