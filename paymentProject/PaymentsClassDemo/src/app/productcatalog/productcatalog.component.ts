import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from '../models/Subscription.model';
import { FakeSubscriptionDataService } from '../services/FakeSubscriptionData.service';
import { SubscriptionCartOrganiserService } from '../services/SubscriptionCartOrganiser.service';

@Component({
  selector: 'app-productcatalog',
  templateUrl: './productcatalog.component.html',
  styleUrls: ['./productcatalog.component.css']
})
export class ProductcatalogComponent implements OnInit {

  products : Subscription [] = [];

  constructor(private fakeDataProvider : FakeSubscriptionDataService, private cartSubscriptionService : SubscriptionCartOrganiserService) {
    this.products = fakeDataProvider.getOfferedSubscriptions();
  }

  ngOnInit(): void {
  }

  addSubscriptionToCart(product : Subscription) {
    this.cartSubscriptionService.addProdFromCart(product);
  }

}
