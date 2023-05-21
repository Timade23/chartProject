import { Component, OnInit } from '@angular/core';
import { SubscriptionCartOrganiserService } from '../services/SubscriptionCartOrganiser.service';
import { CartSubScription } from '../models/CartSubscriptionVM.model';
import { Subscription } from '../models/Subscription.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  subscriptionsInCart : CartSubScription [] = [];
  totalCostOfSubcriptionsInCart :number = 0;

  constructor(private cartManager : SubscriptionCartOrganiserService) {
    this.loadSubscriptions();
    cartManager.cartProductsNumberDS.subscribe(num => {
        this.loadSubscriptions();
    });
  }

  ngOnInit(): void {
  }

  loadSubscriptions() {
    this.subscriptionsInCart = this.cartManager.getSubscriptionsInCart();
    this.totalCostOfSubcriptionsInCart = this.cartManager.getTotalCostOfSubcriptionsInCart();
  }

  increaseProdCount (sub : Subscription) {
    for (var idx = 0; idx < this.subscriptionsInCart.length; idx++) {
      if (this.subscriptionsInCart[idx].subscription.id == sub.id) {
        this.cartManager.addProdFromCart(this.subscriptionsInCart[idx].subscription);
      }
    }
  }

  reduceProdCount (sub : Subscription) {
    for (var idx = 0; idx < this.subscriptionsInCart.length; idx++) {
      if (this.subscriptionsInCart[idx].subscription.id == sub.id) {
         this.cartManager.removeProdFromCart(this.subscriptionsInCart[idx].subscription);
      }
    }
  }

}
