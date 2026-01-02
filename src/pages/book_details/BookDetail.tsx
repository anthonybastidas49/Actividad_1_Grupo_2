import { useParams,useNavigate } from "react-router-dom";
import { booksMock } from "@/utils/books.mock.ts";
import type { Book } from "@/types/book.ts";
import { AddToCartButton } from "@/components/add_to_cart_button/AddToCartButton";
import { Cart } from "@/components/cart/Cart";

export const BookDetail = () => {
  const { id } = useParams<{ id: string }>();

  const book: Book | undefined = booksMock.find((b) => b.id === Number(id));

  const navigate = useNavigate();

  if (!book) {
    return (
      <main className="book-detail">
        <p className="book-detail__not-found">Libro no encontrado</p>

          <button
              onClick={() => navigate(-1)}
              className="book-detail__back book-detail__back--center"
          >
              ← Volver
          </button>
      </main>
    );
  }

  return (
    <main className="book-detail">
        <button
            onClick={() => navigate(-1)}
            className="book-detail__back book-detail__back--center"
        >
            ← Volver
        </button>

      <section className="book-detail__card">
        <img src={book.image} alt={book.title} className="book-detail__image" />

        <div className="book-detail__content">
          <h1 className="book-detail__title">{book.title}</h1>
          <h2 className="book-detail__author">{book.author}</h2>
          <p className="book-detail__description">{book.description}</p>
          <p className="book-detail__price">Precio: ${book.price.toFixed(2)}</p>
          <AddToCartButton book_id={book.id} />
        </div>
      </section>
      <Cart />
    </main>
  );
};
