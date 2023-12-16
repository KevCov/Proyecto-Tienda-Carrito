import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl:string = "https://fakestoreapi.com/products"

  constructor( private _api : HttpClient) { }

  public getProducts():Observable<Product[]>{
    return this._api.get<Product[]>(this.baseUrl)
  }
}
