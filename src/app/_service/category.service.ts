import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from '../_models/category';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryArr:Category[]=[];
 
  getCategory(){
    return this.http.get<Category[]>("http://localhost:61777/products/categories")
  }
  constructor(private http:HttpClient) { }
}
