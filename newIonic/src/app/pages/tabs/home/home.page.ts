import { Component, OnInit } from '@angular/core';
import { Subscription } from '../Model/subscriptionModel';
import { SubscriptionCartOrganiserService } from '../../services/SubscriptionCartOrganiserService';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  subscriptions : Subscription[] | undefined;

  constructor(private cartSubscriptionService: SubscriptionCartOrganiserService) { }

  ngOnInit() {
    this.subscriptions = [
      {
        id: 1,
        name: "Netflix",
        description:  "At Netflix, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries, feature films and mobile games.",
        price : 100
      },
      {
        id: 2,
        name: "Showmax",
        description: "Showmax is an internet TV service. What sets Showmax apart is a unique combination of hit African content, first and exclusive international series, movies, the best kids’ shows, and live sport.",
        price : 500
      },
      {
        id: 3,
        name: "Tencent Video",
        description: "Tencent Video is China's second-largest video-streaming platform. It includes a variety of categories of online videos. The most popular categories on the platform include Chinese TV shows  and China-made animation shows.",
        price : 800
      },
      {
        id: 4,
        name: "BBC iPlayer",
        description: "BBC iPlayer is a video on demand service from the BBC. The service is available on a wide range of devices, including mobile phones and tablets, personal computers and smart televisions.",
        price : 900
      },
      
    ];
  }

  addSubscriptionToCart(product : Subscription) {
    debugger;
    this.cartSubscriptionService.addProdFromCart(product);
  }
}
