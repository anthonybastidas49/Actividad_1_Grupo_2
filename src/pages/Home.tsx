import { useState } from "react";
import { booksMock } from "@/utils/books.mock";
import { BookList } from "@/components/BookList";
import { SearchBar } from "@/components/SearchBar";

export const Home = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = booksMock.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header className="home__header">
        <div className="home__panelheader">
          <h1 className="home__title">Relatos de Papel</h1>
          <p className="home__subtitle">
            Explora historias que permanecen, descubre autores y encuentra tu próxima lectura.
          </p>
        </div>
      </header>

      <main className="home">
        <SearchBar value={search} onChange={setSearch} />
        <BookList books={filteredBooks} />
      </main>
      <footer className="home__footer">
        © 2025 Relatos de Papel — Proyecto académico - Grupo 2
      </footer>
    </>
  );
};

export default Home;