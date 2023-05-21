import { Component, OnInit } from '@angular/core';
import { SubscriptionCartOrganiserService } from '../services/SubscriptionCartOrganiser.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {

  numCartItems : number = 0;
  constructor(private cartManager : SubscriptionCartOrganiserService) {
    this.numCartItems = cartManager.getNumberOfItemsInCart();
    
    cartManager.cartProductsNumberDS.subscribe(num => {
      this.numCartItems = num;
    });
   }

  ngOnInit(): void {
  }

}
