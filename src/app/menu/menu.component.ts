import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})

export class MenuComponent implements OnInit {

  items: MenuItem[];
  activeItem: MenuItem;


  constructor( ) { }  

  ngOnInit() {
    this.items = [
      {label: 'Productos', icon: 'fa fa-fw fa-th', routerLink: ['/productos']},
      {label: 'Stock', icon: 'fa fa-fw fa-cubes', routerLink: ['/stock']},
      {label: 'Cronograma', icon: 'fa fa-fw fa-calendar', routerLink: ['/schedule']},
      {label: 'Consulta', icon: 'fa fa-fw fa-paper-plane', routerLink: ['/contacto']}
    ];
  }
}