import { TestBed, async } from "@angular/core/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { AppComponent } from "./app.component";
import {
  PaymentServiceProvider,
  StripePaymentServiceProvider,
  PayPalPaymentServiceProvider,
  productLifetimeId,
  monthySubscriptionId,
  stripePaymentServiceProvider,
  paypalPaymentServiceProvider,
} from "./models/payment-service-provider";

describe("AppComponent", () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  it("should create the app", () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-payment-factory-pattern'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual("angular-payment-factory-pattern");
  });

  it("should render title", () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector(".content span").textContent).toContain(
      "angular-payment-factory-pattern app is running!"
    );
  });

  it("should create Payment Service Provider", () => {
    let paymentServiceProvider: PaymentServiceProvider = new StripePaymentServiceProvider();

    const actualPaymentServiceProvider: string = stripePaymentServiceProvider;

    const fixture = TestBed.createComponent(AppComponent);

    switch (actualPaymentServiceProvider) {
      case stripePaymentServiceProvider: {
        paymentServiceProvider = new StripePaymentServiceProvider();
        break;
      }
      case paypalPaymentServiceProvider: {
        paymentServiceProvider = new PayPalPaymentServiceProvider();
        break;
      }
      default: {
        break;
      }
    }



    const productId = productLifetimeId;
    const subsciptionId =  monthySubscriptionId;

    const product = paymentServiceProvider.purchaseProduct(productId);
    const subscription = paymentServiceProvider.purchaseSubscription(subsciptionId);

    console.log("Client: Testing client code with the first factory type...");
  });
});
