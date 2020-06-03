import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaypalPaymentsService {

  constructor() { }

  purchaseProduct (productId: string) : boolean {
    console.log ('Paypal Payments Purchased Product = ', productId);
    return true;
  }

  purchaseSubscription (subscriptionId: string) : boolean {
    console.log ('Paypal Payments Purchased Subscription = ', subscriptionId);
    return true;
  }  
}
