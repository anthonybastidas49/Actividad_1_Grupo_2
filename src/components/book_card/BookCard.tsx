import type { Book } from "@/types/book.ts";
import { Link } from "react-router-dom";

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
        <h3 className="book-card__title">{book.title}</h3>
        <p className="book-card__author">{book.author}</p>

        <Link to={`/books/${book.id}`} className="book-card__link">
          Ver detalle
        </Link>
      </div>
    </article>
  );
};