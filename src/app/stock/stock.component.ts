import { Component, OnInit, OnDestroy } from '@angular/core';
import { Stock } from '../models/stock.model';
import { StockService } from '../services/stock.service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { SelectItem } from 'primeng/api';
import { MenuItem } from 'primeng/api';
import { Subject } from 'rxjs';
import { takeUntil } from "rxjs/operators";

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss'], 
  providers: [StockService]
})

export class StockComponent implements OnInit, OnDestroy {
  
  stock: Stock[];
  cols: any[];
  newStock: Stock;
  stockForm: FormGroup;
  products: Array<SelectItem>;

  items: MenuItem[];
  activeItem: MenuItem;

  ngUnsubscribe: Subject<void>;

  constructor(
    private stockService: StockService,
    private formBuilder: FormBuilder) {
      this.ngUnsubscribe = new Subject<void>();
    }

  ngOnInit() {
    this.stockService.getStock().pipe(takeUntil(this.ngUnsubscribe)).subscribe(stock => this.stock = stock)
    this.fillProductsDropdown();
    this.buildForm();
    this.cols = [
      { field: 'name', header: 'Producto' },
      { field: 'tipo', header: 'Tipo' },
      { field: 'cant', header: 'Cantidad' },    
    ],
    this.items = [
      {label: 'Inicio', icon: 'fa fa-fw fa-bar-chart', routerLink: ['inicio']},
      {label: 'Productos', icon: 'fa fa-fw fa-support', routerLink: ['productos']},
      {label: 'Stock', icon: 'fa fa-fw fa-book', routerLink: ['stock']},
      {label: 'Cronograma', icon: 'fa fa-fw fa-book', routerLink: ['schedule']},
      {label: 'Contacto', icon: 'fa fa-fw fa-twitter', routerLink: ['contacto']}
  ];
  this.activeItem = this.items[2];
  }
  ngOnDestroy(): void {
    this.ngUnsubscribe.next(); 
    this.ngUnsubscribe.complete();
  }

  // DROPDOWN
  fillProductsDropdown(): Array<SelectItem> {
    this.products = new Array<SelectItem>();
    this.products = [
      { label: 'Huevos', value: 'Huevos' },
      { label: 'Gallinas', value: 'Gallinas' },
      { label: 'Pollo', value: 'Pollo' },
      { label: 'Alimento por kg', value: 'Alimentos' },]
    return this.products;
  }
  buildForm() {
    this.stockForm = this.formBuilder.group({
      name: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
      cant: new FormControl(null, [Validators.required]),
    });
  }
  //DELETE
  deleteStock(stock:any){
    let id = stock.id;
    let stockAux = this.stock
    this.stock = stockAux.filter( element => element.id != id);
  }
  //EDIT
  editStock(stock: any){ }

  //SAVE
  save(): void {
    if (this.stockForm.valid) {
      let newStock = new Stock();

      newStock.cant = this.stockForm.get("cant").value;
      newStock.tipo = this.stockForm.get("color").value;
      newStock.name = this.stockForm.get("name").value;
      this.stockService.setStock(newStock);
    }
  }

  //VALIDATORS
  hasError(formControlName: string): boolean {
    return this.stockForm.get(formControlName).value != null && !this.stockForm.get(formControlName).valid;
  }
  showRequiredMessage(formControlName: string) {
    if (this.stockForm.get(formControlName).errors === null) return "";
    return Object.keys(this.stockForm.get(formControlName).errors)[0];
  }


}
 
