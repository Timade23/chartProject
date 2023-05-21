import { Component, OnInit } from '@angular/core';
import { SubscriptionCartOrganiserService } from '../services/SubscriptionCartOrganiser.service';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private cartManager : SubscriptionCartOrganiserService) {

  }

  ngOnInit(): void {
    this.cartManager.clearCart();
  }

}
