import { Component, OnInit } from '@angular/core';
import { faPlusSquare, faShoePrints } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  containerInside: boolean;
  faPlusSquare = faPlusSquare;
  faShoePrints = faShoePrints;

  constructor() { }


  ngOnInit() {
  }

}
