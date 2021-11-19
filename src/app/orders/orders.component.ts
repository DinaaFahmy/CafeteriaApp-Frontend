import { Component, OnInit } from '@angular/core';
import { Users } from '../_models/users';
import { UsersService } from '../_service/users.service';
import { Products } from '../_models/products';
import { ProductsService } from '../_service/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
u:Users[]=[];
us:Users=new Users();
p:Products[]=[];
pr:Products=new Products();
count:number=0;
  constructor(private user_serv:UsersService,private p_serv:ProductsService) { }
//document.getElementsByTagName("button")[2].children[2].textContent
  clickItem(a){
    this.count+=1;
var lbl = document.createElement("label");
var br = document.createElement("br");
lbl.setAttribute("style","margin:10px");
lbl.textContent = a.firstElementChild.textContent +  "  |  " + a.children[2].innerText + " | " + " x"+this.count;
document.getElementById("itemsList").prepend(br);
document.getElementById("itemsList").prepend(lbl);
this.looping(lbl);
console.log(a.children[2].innerText.split(" ")[0])
}
looping(a){
  var productsdiv = document.getElementById("itemsList").children;
  for(let i=0;i<productsdiv.length;i++){
   if(productsdiv[i].textContent == a.innerText)
    console.log("repeated");
}
}
  ngOnInit(): void {
   
 this.user_serv.getUsers().subscribe( a => {this.u=a }); 
 this.p_serv.getProducts().subscribe(a=>{this.p=a; })
  }

}
