import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaypalPaymentsService {

  constructor() { }

  purchaseProduct (productId: string) {
    console.log ('Paypal Payments Purchased Product = ', productId)
  }

  purchaseSubscription (subscriptionId: string) {
    console.log ('Paypal Payments Purchased Subscription = ', subscriptionId)
  }  
}
