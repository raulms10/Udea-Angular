import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
  }

  goToCursos() {
    const link = ['/cursos'];
    this.route.navigate(link);
  }

}
