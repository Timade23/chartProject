import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SquarecheckoutComponent } from './squarecheckout/squarecheckout.component';
import { PayfastcheckoutComponent } from './payfastcheckout/payfastcheckout.component';
import { ProductcatalogComponent } from './productcatalog/productcatalog.component';
import { CartComponent } from './cart/cart.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessComponent } from './success/success.component';
import { CancelComponent } from './cancel/cancel.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SquarecheckoutComponent,
    PayfastcheckoutComponent,
    ProductcatalogComponent,
    CartComponent,
    NavigationBarComponent,
    SuccessComponent,
    CancelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
