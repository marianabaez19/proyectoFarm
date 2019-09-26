import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;


  constructor(
    /* private router: Router*/ ) { }  

  ngOnInit() {
    this.items = [
      {label: 'Stock', icon: 'fa fa-fw fa-book', routerLink: ['/stock']},
      {label: 'Productos', icon: 'fa fa-fw fa-support', routerLink: ['/productos']},
      {label: 'Cronograma', icon: 'fa fa-fw fa-book', routerLink: ['/schedule']},
      {label: 'Consulta', icon: 'fa fa-fw fa-twitter', routerLink: ['/contacto']}
    ];
  }
}