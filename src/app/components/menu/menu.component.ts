import { Component, OnInit } from '@angular/core';
import { faPlus, faShoePrints } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  containerInside: boolean;
  faPlus = faPlus;
  faShoePrints = faShoePrints;

  constructor() { }


  ngOnInit() {
  }

}
