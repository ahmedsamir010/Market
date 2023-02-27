import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private _HttpClient:HttpClient) { }
  baseUrl: string = `https://fakestoreapi.com/`;
  //--------------get All Products-----------------------
  getAllProducts():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}products`)
  }

  //--------------get Details about Product-----------------------

  getDetailsProduct(id:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}products/${id}`)
  }

  //--------------get All Categories -----------------------

  getAllCategories():Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}products/categories`)
  }
  //--------------get Products By Category-----------------------

  getProductsByCategory(category:string):Observable<any>
  {
    return this._HttpClient.get(`${this.baseUrl}products/category/${category}`)
  }



}
