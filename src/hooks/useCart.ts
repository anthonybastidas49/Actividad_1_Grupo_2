import type { Book } from "@/types/book";
import { booksMock } from "@/utils/books.mock";
import { useEffect, useState } from "react";

const storageKey = "cartBooks";

const getBookIdsInCart = () => {
  const bookIdsInCart = localStorage.getItem(storageKey);
  if (!bookIdsInCart) return [];
  try {
    const parsed = JSON.parse(bookIdsInCart);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((id): id is number => Number.isInteger(id));
  } catch {
    return [];
  }
};

export const useCart = ({ book_id }: { book_id?: number }) => {
  const [cartBooks, setCartBooks] = useState<Array<Book>>([]);

  const syncCartBooks = (bookIds: number[]) => {
    setCartBooks(booksMock.filter((book) => bookIds.includes(book.id)));
  };

  useEffect(() => {
    const bookIds = getBookIdsInCart();
    const timer = setTimeout(() => {
      syncCartBooks(bookIds);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleBookInCart = () => {
    if (isBookInCart()) {
      removeFromCart();
      return;
    }
    addToCart();
  };

  const addToCart = () => {
    if (!book_id) return;

    const bookIds = getBookIdsInCart();
    if (bookIds.includes(book_id)) {
      syncCartBooks(bookIds);
      return;
    }

    const nextBookIds = [...bookIds, book_id];
    localStorage.setItem(storageKey, JSON.stringify(nextBookIds));
    syncCartBooks(nextBookIds);
  };

  const removeFromCart = () => {
    if (!book_id) return;

    const bookIds = getBookIdsInCart();
    const nextBookIds = bookIds.filter((id) => id !== book_id);
    localStorage.setItem(storageKey, JSON.stringify(nextBookIds));
    syncCartBooks(nextBookIds);
  };

  const isBookInCart = () => {
    if (!book_id) return false;
    return cartBooks.some((book) => book.id === book_id);
  };

  return {
    addToCart,
    cartBooks,
    isBookInCart,
    toggleBookInCart,
  };
};
