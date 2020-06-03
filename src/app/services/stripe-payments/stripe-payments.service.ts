import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StripePaymentsService {

  constructor() { }

  purchaseProduct (productId: string) {
    console.log ('Stripe Payments Purchased Product = ', productId)
  }

  purchaseSubscription (subscriptionId: string) {
    console.log ('Stripe Payments Purchased Subscription = ', subscriptionId)
  }  }
