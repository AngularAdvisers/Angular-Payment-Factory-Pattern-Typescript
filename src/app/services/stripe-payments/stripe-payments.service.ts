import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripePaymentsService {

  constructor() { }

  purchaseProduct (productId: string) : boolean{
    console.log ('Stripe Payments Purchased Product = ', productId);
    return true;
  }

  purchaseSubscription (subscriptionId: string) : boolean {
    console.log ('Stripe Payments Purchased Subscription = ', subscriptionId)
    return true;
  }  }
