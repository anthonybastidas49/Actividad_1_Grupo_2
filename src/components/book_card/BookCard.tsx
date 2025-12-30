import type { Book } from "@/types/book.ts";
import { Link } from "react-router-dom";
import { AddToCartButton } from "@/components/add_to_cart_button/AddToCartButton";

interface Props {
  book: Book;
}

export const BookCard = ({ book }: Props) => {
  return (
    <article className="book-card">
      <div className="book-card__image-wrapper">
        <img
          src={book.image}
          alt={book.title}
          className="book-card__image"
        />
        <div className="book-card__overlay" />
      </div>

      <div className="book-card__content">
        <h2 className="book-card__title">{book.title}</h2>
        <p className="book-card__author">{book.author}</p>
        <p className="book-card__price">${book.price.toFixed(2)}</p>

        <div className="book-card__actions">
          <Link to={`/books/${book.id}`} className="book-card__link">
            Ver detalle
          </Link>
          <AddToCartButton book_id={book.id}/>
        </div>
      </div>
    </article>
  );
};