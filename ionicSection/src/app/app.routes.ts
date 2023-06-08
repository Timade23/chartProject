import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/tabs/tabs.page').then((m) => m.TabsPage),
    children:[
  
  {
    path: 'tabs',
    loadComponent: () => import('./pages/tabs/tabs.page').then( m => m.TabsPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/tabs/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'cart',
    loadComponent: () => import('./pages/tabs/cart/cart.page').then( m => m.CartPage)
  },
]
  },{
    path: '',
    redirectTo: '/pages/tabs',
    pathMatch: 'full',
  },

];
