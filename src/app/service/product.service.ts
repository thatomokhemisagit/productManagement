import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../products/product';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url = '../assets/products.json';

  constructor(private http: HttpClient) { }

  getProduct(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.url);
  }
}
