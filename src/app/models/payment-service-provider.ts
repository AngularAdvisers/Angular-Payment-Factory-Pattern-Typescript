import { StripePaymentsService } from '../services/stripe-payments/stripe-payments.service';
import { PaypalPaymentsService } from '../services/paypal-payments/paypal-payments.service';

/**
 * The PaymentsServiceProvider Factory interface declares a set of methods that return
 * different abstract products. These products are called a family and are
 * related by a high-level theme or concept. Products of one family are usually
 * able to collaborate among themselves. A family of products may have several
 * variants, but the products of one variant are incompatible with products of
 * another.
 */
export interface PaymentsServiceProvider {
    createProduct(): AbstractProduct;
    createSubscription(): AbstractSubscription;
}

/**
 * Concrete Factories produce a family of products that belong to a single
 * variant. The factory guarantees that resulting products are compatible. Note
 * that signatures of the Concrete Factory's methods return an abstract product,
 * while inside the method a concrete product is instantiated.
 */
export class StripePaymentsServiceProvider implements PaymentsServiceProvider {
    public createProduct(): AbstractProduct {
        return new ConcreteStripeProduct();
    }

    public createSubscription(): AbstractSubscription {
        return new ConcreteStripeSubscription();
    }
}

/**
 * Each Concrete Factory has a corresponding product variant.
 */
export class PaypalPaymentsServiceProvider implements PaymentsServiceProvider {
    public createProduct(): AbstractProduct {
        return new ConcretePaypalProduct();
    }

    public createSubscription(): AbstractSubscription {
        return new ConcretePaypalSubscription();
    }
}

/**
 * Each distinct product of a product family should have a base interface. All
 * variants of the product must implement this interface.
 */
interface AbstractProduct {
    purchaseProduct(paymentService:any, productId: string): boolean;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class ConcreteStripeProduct implements AbstractProduct {
    public purchaseProduct(paymentService:StripePaymentsService, productId: string): boolean {
        const returnValue: boolean = paymentService.purchaseProduct(productId);
        return returnValue;
    }
}

class ConcretePaypalProduct implements AbstractProduct {
    public purchaseProduct(paymentService:PaypalPaymentsService, productId: string): boolean {
        const returnValue: boolean = paymentService.purchaseProduct(productId);
        return returnValue;
    }
}

/**
 * Here's the the base interface of another product. All products can interact
 * with each other, but proper interaction is possible only between products of
 * the same concrete variant.
 */
interface AbstractSubscription {
    purchaseSubscription(paymentService:any, subscriptionId: string): boolean;
}

/**
 * These Concrete Products are created by corresponding Concrete Factories.
 */
class ConcreteStripeSubscription implements AbstractSubscription {

    public purchaseSubscription(paymentService:StripePaymentsService, subscriptionId: string): boolean {
        const returnValue: boolean = paymentService.purchaseSubscription(subscriptionId);
        return returnValue;
    }

}

class ConcretePaypalSubscription implements AbstractSubscription {

    public purchaseSubscription(paymentService:StripePaymentsService, subscriptionId: string): boolean {
        const returnValue: boolean = paymentService.purchaseSubscription(subscriptionId);
        return returnValue;
    }

}