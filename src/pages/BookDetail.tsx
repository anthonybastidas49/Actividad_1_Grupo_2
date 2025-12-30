import { useParams, Link } from "react-router-dom";
import { booksMock } from "@/utils/books.mock";
import type { Book } from "@/types/book";

export const BookDetail = () => {
  const { id } = useParams<{ id: string }>();

  const book: Book | undefined = booksMock.find((b) => b.id === Number(id));

  if (!book) {
    return (
      <main className="book-detail">
        <p className="book-detail__not-found">Libro no encontrado</p>

        <Link to="/" className="book-detail__back book-detail__back--center">
          Volver al catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="book-detail">
      <Link to="/" className="book-detail__back">
        ← Volver
      </Link>

      <section className="book-detail__card">
        <img src={book.image} alt={book.title} className="book-detail__image" />

        <div className="book-detail__content">
          <h1 className="book-detail__title">{book.title}</h1>
          <h2 className="book-detail__author">{book.author}</h2>
          <p className="book-detail__description">{book.description}</p>
        </div>
      </section>
      <footer className="home__footer">
        © 2025 Relatos de Papel — Proyecto académico - Grupo 2
      </footer>
    </main>
  );
};