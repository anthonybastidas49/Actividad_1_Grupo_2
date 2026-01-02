import { BackButton } from "@/components/back_button/BackButton";
import { CheckoutDetail } from "@/components/checkout_detail/CheckoutDetail";
import { PaymentForm } from "@/components/payment_form/PaymentForm";
import { useCart } from "@/hooks/useCart";

export const Checkout = () => {
  const { cartBooks } = useCart({});

  return (
    <main className="checkout">
      <BackButton />
      <h1 className="checkout__title">Checkout</h1>
      <div className="checkout__content">
        <CheckoutDetail books={cartBooks} />
        <PaymentForm />
      </div>
    </main>
  );
};
