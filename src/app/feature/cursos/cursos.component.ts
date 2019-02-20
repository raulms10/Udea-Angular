import { Component, OnInit } from '@angular/core';
import { CursosService } from './shared/cursos.service';
import { Curso } from './shared/curso.model';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  displayedColumns: string[] = ['nombre', 'categoria', 'nota', 'fecha'];
  cursos: Curso[];

  constructor(private cursosService: CursosService) { }

  ngOnInit() {
   this.cursosService.getCursos().subscribe( (result) => {
    this.cursos =  Object.values(result).map( (item) => {
        return item as Curso;
      });
    });
  }

}
