import { useCartBillingDetail } from "@/hooks/useCartBillingDetail";
import type { Book } from "@/types/book";

type CheckoutDetailProps = {
  books: Book[];
};

export const CheckoutDetail = ({ books }: CheckoutDetailProps) => {
  const { subTotalPrice, taxAmount, totalPrice } = useCartBillingDetail({
    books,
  });

  return (
    <section className="checkout-detail__section">
      <h2 className="checkout-detail__title">Detalle de facturación</h2>
      <div className="checkout-detail__content">
        <div className="checkout-detail__container">
          {books.map((book) => (
            <div key={book.id} className="checkout-detail__book-item">
              <span className="book-item__title">{book.title}</span>
              <span className="book-item__price">${book.price.toFixed(2)}</span>
            </div>
          ))}
        </div>
        <div className="checkout-detail__container">
          <div className="checkout-detail__item">
            <span className="item__label">Subtotal: </span>
            <span className="item__value">${subTotalPrice.toFixed(2)}</span>
          </div>
          <div className="checkout-detail__item">
            <span className="item__label">Impuestos (15%): </span>
            <span className="item__value">${taxAmount.toFixed(2)}</span>
          </div>
          <div className="checkout-detail__item checkout-detail__item--total">
            <span className="item__label">Total: </span>
            <span className="item__value">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
