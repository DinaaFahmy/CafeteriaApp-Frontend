import { Component, OnInit } from '@angular/core';
import { Products } from '../_models/products';
import { Category } from '../_models/category';
import { CategoryService } from '../_service/category.service';
import { ProductsService } from '../_service/products.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
p:Products=new Products();
c:Category[]=[];

  constructor(private p_serv:ProductsService,private c_serv:CategoryService) { }
add(){
  this.p_serv.addProduct(this.p).subscribe(a=>{console.log(a);})
  alert("Added Successfully");
}
  ngOnInit(): void {
  this.c_serv.getCategory().subscribe(a=> {this.c=a; console.log(a)})
  
  }

}
