import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CancelComponent } from './cancel/cancel.component';
import { CartComponent } from './cart/cart.component';
import { ProductcatalogComponent } from './productcatalog/productcatalog.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path : '', component: ProductcatalogComponent},
  {path : 'cart', component: CartComponent},
  {path : 'success', component: SuccessComponent},
  {path: 'cancel', component: CancelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
