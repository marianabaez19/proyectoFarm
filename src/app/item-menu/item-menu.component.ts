import { Component, Input, Output } from '@angular/core';
import { Items } from '../models/items.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-item-menu',
  templateUrl: './item-menu.component.html',
  styleUrls: ['./item-menu.component.scss']
})
export class ItemMenuComponent {

  @Input() item: Items;
  @Input() paths: string;

  path: string[];

  constructor(
    private router: Router) {
      
    }
        
    ngOnInit() {
      this.path = [this.paths];
    }

  }
