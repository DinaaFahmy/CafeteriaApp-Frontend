import { Injectable } from '@angular/core';
import { Products } from '../_models/products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  productsArr:Products[]=[];  
  addProduct(p:Products){
return this.http.post("http://localhost:61777/products/AddProduct",p);
  }
   getProducts(){
    return this.http.get<Products[]>("http://localhost:61777/products");}
   
  constructor(private http:HttpClient) { }
}
