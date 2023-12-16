import { Component, EventEmitter, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product';
import { CarService } from '../../services/car.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrl: './products-list.component.css',
})
export class ProductsListComponent implements OnInit {
  productos: Product[] = [];
  filtertext = new EventEmitter<string>();
  nameSearch: string = '';

  constructor(
    private _apiProducts: ProductService,
    private _carService: CarService
  ) {}

  ngOnInit(): void {
    this._apiProducts.getProducts().subscribe((p) => (this.productos = p));
  }

  emitNameSearch(event: any) {
    this.nameSearch = event.target.value;
    this.filtertext.emit(this.nameSearch);
  }
  addCar(p: Product) {
    this._carService.addProductCar(p);
  }
}
