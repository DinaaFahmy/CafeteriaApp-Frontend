import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { ErrorComponent } from './error/error.component';
import { NewProductComponent } from './new-product/new-product.component';
import { OrdersComponent } from './orders/orders.component';


const routes: Routes = [
  {path:"newProduct", component:NewProductComponent},
  {path:"AddOrder", component:OrdersComponent}
  //  {path:"**",component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
