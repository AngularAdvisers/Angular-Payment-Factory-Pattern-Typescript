import { Component } from "@angular/core";
import { StripePaymentsService } from './services/stripe-payments/stripe-payments.service';
import { PaypalPaymentsService } from './services/paypal-payments/paypal-payments.service';
import { PaymentsServiceProvider, PaypalPaymentsServiceProvider, StripePaymentsServiceProvider } from "./models/payment-service-provider";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {

  constructor(private stripePaymentsService:StripePaymentsService,
              private paypalPaymentsService:PaypalPaymentsService) {}
  title = "angular-payment-factory-pattern";

  purchaseProduct() {
  
    const stripePaymentsServiceProvider: PaymentsServiceProvider = new StripePaymentsServiceProvider();
    const paypalPaymentsServiceProvider: PaymentsServiceProvider = new PaypalPaymentsServiceProvider();
    const stripeProduct = stripePaymentsServiceProvider.createProduct();
    const stripeSubscription = stripePaymentsServiceProvider.createSubscription();
    const paypalProduct = paypalPaymentsServiceProvider.createProduct();
    const paypalSubscription = paypalPaymentsServiceProvider.createSubscription();
    stripeProduct.purchaseProduct(this.stripePaymentsService, 'Lifetime');
    stripeSubscription.purchaseSubscription(this.stripePaymentsService, 'monthly');
    paypalProduct.purchaseProduct(this.paypalPaymentsService, 'Lifetime');
    paypalSubscription.purchaseSubscription(this.paypalPaymentsService, 'monthly');

  }
}
