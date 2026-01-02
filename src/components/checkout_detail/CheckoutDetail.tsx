import { useCartBillingDetail } from "@/hooks/useCartBillingDetail";
import type { Book } from "@/types/book";

type CheckoutDetailProps = {
  books: Book[];
};

export const CheckoutDetail = ({ books }: CheckoutDetailProps) => {
  const { subTotalPrice, taxAmount, totalPrice } = useCartBillingDetail({
    books,
  });

  const grouped = books.reduce((acc, book) => {
    if (!acc[book.id]) acc[book.id] = { book, qty: 0 } as { book: Book; qty: number };
    acc[book.id].qty += 1;
    return acc;
  }, {} as Record<number, { book: Book; qty: number }>);

  const items = Object.values(grouped);

  return (
    <section className="checkout-detail__section">
      <h2 className="checkout-detail__title">Detalle de facturación</h2>
      <div className="checkout-detail__content">
        <div className="checkout-detail__container">
          {items.map(({ book, qty }) => (
            <div key={book.id} className="checkout-detail__book-item">
              <span className="book-item__title">{book.title} x {qty}</span>
              <span className="book-item__price">${(book.price * qty).toFixed(2)}</span>
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
