import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private carList: Product[] = [];
  private _products: BehaviorSubject<Product[]>;

  constructor() {
    this._products = new BehaviorSubject<Product[]>([]);
  }

  public getProducts() {
    return this._products.asObservable();
  }

  public addProductCar(product: Product) {
    if(!this.carList.includes(product)){
      this.carList.push(product);
      this._products.next(this.carList);
    }
  }

  public deleteProductCar(index : number){
    this.carList.splice(index,1);
    this._products.next(this.carList)
  }
}
