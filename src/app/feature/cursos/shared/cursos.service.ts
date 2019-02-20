import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Curso } from './curso.model';

@Injectable()
export class CursosService {
  cursosURL = 'https://curso-project.firebaseio.com/curso.json';

  constructor(private httpClient: HttpClient) { }

  getCursos() {
      return this.httpClient.get(this.cursosURL);
  }

  savedCurso (curso: Curso){
    return this.httpClient.post(this.cursosURL, curso);
  }
}
