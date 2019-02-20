import { Component, OnInit } from '@angular/core';
import { Curso} from '../shared/curso.model';
import { CursosService } from '../shared/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle-curso',
  templateUrl: './detalle-curso.component.html',
  styleUrls: ['./detalle-curso.component.css']
})
export class DetalleCursoComponent implements OnInit {

  curso: Curso = new Curso();
  constructor(private cursoService: CursosService, private route: Router) { }

  ngOnInit() {
    }


  crearCurso() {
    this.cursoService.savedCurso(this.curso).subscribe((result) => {
      console.log(result);
      this.goToCursos();
    });
  }

  goToCursos() {
    const link = ['/cursos'];
    this.route.navigate(link);
  }
}
