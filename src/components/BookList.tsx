import type { Book } from "@/types/book";
import { BookCard } from "./BookCard";

interface Props {
  books: Book[];
}

export const BookList = ({ books }: Props) => {
  if (books.length === 0) {
    return <p className="book-detail__not-found">No se encontraron libros</p>;
  }

  return (
    <section className="book-list">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </section>
  );
};