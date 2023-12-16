import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';
import { Product } from '../../interfaces/product';
import { map } from 'rxjs';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css',
})
export class CarritoComponent implements OnInit {
  carProducts: Product[] = [];
  total: number = 0;

  constructor(private _carService: CarService) {}

  ngOnInit(): void {
    this._carService
      .getProducts()
      .subscribe((products) => (this.carProducts = products));
    this._carService
      .getProducts()
      .pipe(
        map((products) => {
          return products.reduce((previo, actual) => previo + actual.price, 0);
        })
      )
      .subscribe((val) => this.total = val);
  }

  deleteCarProduct(index: number) {
    this._carService.deleteProductCar(index);
  }
}
