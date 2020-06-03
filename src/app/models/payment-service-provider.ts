import { StripePaymentsService } from '../services/stripe-payments/stripe-payments.service';
import { PaypalPaymentsService } from '../services/paypal-payments/paypal-payments.service';

/**
 * Constance
 */
export const PaypalPaymentServiceProviderConst: string = "PayPal";
export const StripePaymentServiceProviderConst: string = "Stripe";
export const ProductLifetimeIdConst = 'Lifetime';
export const MonthySubscriptionIdConst = 'monthy';
export const YearlySubscritionIdConst = 'yearly';

/**
 * The PaymentServiceProvider Factory interface declares a set of methods that return
 * different abstract products. These products are called a family and are
 * related by a high-level theme or concept. Products of one family are usually
 * able to collaborate among themselves. A family of products may have several
 * variants, but the products of one variant are incompatible with products of
 * another.
 */
export interface PaymentServiceProvider {
    purchaseProduct(productId: string): AbstractPurchaseProduct;

    purchaseSubscription(subscriptionId: string): AbstractPurchaseSubscription;
}

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
export class StripePaymentServiceProvider implements PaymentServiceProvider {
    public purchaseProduct(): AbstractPurchaseProduct {
        return new StripePurchaseProduct( new StripePaymentsService() );
    }

    public purchaseSubscription(): AbstractPurchaseSubscription {
        return new StripePurchaseSubscription( new StripePaymentsService());
    }
}

/**
 * Each Concrete Factory has a corresponding product variant.
 */
export class PayPalPaymentServiceProvider implements PaymentServiceProvider {
    public purchaseProduct(): AbstractPurchaseProduct {
        return new PayPalPurchaseProduct(new PaypalPaymentsService());
    }

    public purchaseSubscription(): AbstractPurchaseSubscription {
        return new PayPalPurchaseSubscription(new PaypalPaymentsService());
    }
}

/**
 * Each distinct product of a product family should have a base interface. All
 * variants of the product must implement this interface.
 */
interface AbstractPurchaseProduct {
    
    purchaseProduct(productId: string): string;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class StripePurchaseProduct implements AbstractPurchaseProduct {

    constructor(private stripePaymentService: StripePaymentsService) {}

    public purchaseProduct(productId: string): string {
        this.stripePaymentService.purchaseProduct(productId);
        return 'The result of the product A1.';
    }
}

class PayPalPurchaseProduct implements AbstractPurchaseProduct {

    constructor(private paypalPaymentService: PaypalPaymentsService) {}

    public purchaseProduct(productId: string): string {
        this.paypalPaymentService.purchaseProduct(productId);
        return 'The result of the product A2.';
    }
}

/**
 * Here's the the base interface of another product. All products can interact
 * with each other, but proper interaction is possible only between products of
 * the same concrete variant.
 */
interface AbstractPurchaseSubscription {
    purchaseSubscription(subscriptionId: string): string;

}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class StripePurchaseSubscription implements AbstractPurchaseSubscription {

    constructor(private stripePaymentService: StripePaymentsService) {}

    public purchaseSubscription(subscriptionId: string): string {
        this.stripePaymentService.purchaseSubscription(subscriptionId);
        return 'The result of the product B1.';
    }

}

class PayPalPurchaseSubscription implements AbstractPurchaseSubscription {

    constructor(private paypalPaymentService: PaypalPaymentsService) {}

    public purchaseSubscription(subscriptionId: string): string {
        this.paypalPaymentService.purchaseSubscription(subscriptionId);
        return 'The result of the product B2.';
    }

}