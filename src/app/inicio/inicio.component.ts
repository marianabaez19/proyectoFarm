import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITEMS } from '../mock/mock-items'


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {

  items = ITEMS;
  paths : string[];

  constructor(private router: Router) {
    this.paths = ['productos', 'stock', 'schedule', 'contacto']
    
   }

  ngOnInit() {
  }

  /*setRoute(value:string) {
    this.router.navigate([value]);
  }*/
}
