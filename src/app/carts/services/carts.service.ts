import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  baseUrl:string=`https://fakestoreapi.com/`
  constructor(private _HttpClient:HttpClient) { }

  cartOrder(carts:any)
  {
    return this._HttpClient.post(`${this.baseUrl}carts`,carts)
  }
}
