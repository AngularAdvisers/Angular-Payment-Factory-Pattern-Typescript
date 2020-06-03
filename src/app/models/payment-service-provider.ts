import { StripePaymentsService } from '../services/stripe-payments/stripe-payments.service';

/**
 * Constance
 */
export const paypalPaymentServiceProvider: string = "PayPal";
export const stripePaymentServiceProvider: string = "Stripe";
export const productLifetimeId = 'Lifetime';
export const monthySubscriptionId = 'monthy';
export const yearlySubscritionId = 'yearly';

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
        return new StripePurchaseProduct();
    }

    public purchaseSubscription(): AbstractPurchaseSubscription {
        return new StripePurchaseSubscription();
    }
}

/**
 * Each Concrete Factory has a corresponding product variant.
 */
export class PayPalPaymentServiceProvider implements PaymentServiceProvider {
    public purchaseProduct(): AbstractPurchaseProduct {
        return new PayPalPurchaseProduct();
    }

    public purchaseSubscription(): AbstractPurchaseSubscription {
        return new PayPalPurchaseSubscription();
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

    // constructor(private stripePaymentService: StripePaymentsService) {}

    public purchaseProduct(productId: string): string {
        // this.stripePaymentService.purchaseProduct(productId);
        return 'The result of the product A1.';
    }
}

class PayPalPurchaseProduct implements AbstractPurchaseProduct {
    public purchaseProduct(productId: string): string {
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

    public purchaseSubscription(subscriptionId: string): string {
        
        return 'The result of the product B1.';
    }

}

class PayPalPurchaseSubscription implements AbstractPurchaseSubscription {

    public purchaseSubscription(subscriptionId: string): string {
        return 'The result of the product B2.';
    }

}