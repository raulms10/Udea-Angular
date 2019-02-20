import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  value: String = 's';

  constructor() {
    this.value = this.value.concat(' Const');
   }

  ngOnInit() {
    this.value = this.value.concat(' Oninit');
  }

}
