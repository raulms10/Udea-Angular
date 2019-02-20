import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exportable',
  templateUrl: './exportable.component.html',
  styleUrls: ['./exportable.component.css']
})
export class ExportableComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToCursos() {
    const link = ['/cursos'];
    this.route.navigate(link);
  }

}
