import { useState } from "react";
import { booksMock } from "@/utils/books.mock.ts";
import { BookList } from "@/components/book_list/BookList.tsx";
import { SearchBar } from "@/components/search_bar/SearchBar.tsx";
import { Cart } from "@/components/cart/Cart";

export const Home = () => {
  const [search, setSearch] = useState("");

  const filteredBooks = booksMock.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <main className="home">
        <SearchBar value={search} onChange={setSearch} />
        <BookList books={filteredBooks} />
      </main>
      <Cart />
    </>
  );
};

export default Home;