import { Component } from "@angular/core";
import {
  PaymentServiceProvider,
  StripePaymentServiceProvider,
  PayPalPaymentServiceProvider,
  ProductLifetimeIdConst,
  MonthySubscriptionIdConst,
  StripePaymentServiceProviderConst,
  PaypalPaymentServiceProviderConst,
} from "./models/payment-service-provider";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "angular-payment-factory-pattern";

  purchaseProduct() {
    let paymentServiceProvider: PaymentServiceProvider = new StripePaymentServiceProvider();

    const actualPaymentServiceProvider: string = StripePaymentServiceProviderConst;

    // switch (actualPaymentServiceProvider) {
    //   case StripePaymentServiceProviderConst: {
    //     paymentServiceProvider = new StripePaymentServiceProvider();
    //     break;
    //   }
    //   case PaypalPaymentServiceProviderConst: {
    //     paymentServiceProvider = new PayPalPaymentServiceProvider();
    //     break;
    //   }
    //   default: {
    //     break;
    //   }
    // }
    console.log ('Calling Purchase Product');
    paymentServiceProvider.purchaseProduct(ProductLifetimeIdConst);

  }
}
