import type { Book } from "@/types/book";
import { booksMock } from "@/utils/books.mock";
import { useEffect, useState } from "react";

const storageKey = "cartBooks";

export const useCart = ({ book_id }: { book_id?: number }) => {
  const [cartBooks, setCartBooks] = useState<Array<Book>>([]);

  useEffect(() => {
    applyFromStorage();

    function onStorage(e: StorageEvent) {
      if (e.key === storageKey) applyFromStorage();
    }
    
    window.addEventListener("storage", onStorage);
    window.addEventListener("cart:updated", applyFromStorage);

    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("cart:updated", applyFromStorage);
    };
  }, []);

  const applyFromStorage = () => {
    const ids = getBooksFromStorage();
    syncCartBooks(ids);
  };

  const getBooksFromStorage = () => {
    const bookIdsInCart = localStorage.getItem(storageKey);
    if (!bookIdsInCart) return [] as number[];
    try {
      const parsed = JSON.parse(bookIdsInCart);
      if (!Array.isArray(parsed)) return [] as number[];
      return parsed.filter((id): id is number => Number.isInteger(id));
    } catch {
      return [] as number[];
    }
  };

  const syncCartBooks = (bookIds: number[]) => {
    const mapped = bookIds
      .map((id) => booksMock.find((b) => b.id === id))
      .filter((b): b is Book => Boolean(b));
    setCartBooks(mapped);
  };

  const setBookIdsInCart = (bookIds: number[]) => {
    localStorage.setItem(storageKey, JSON.stringify(bookIds));
    syncCartBooks(bookIds);
    window.dispatchEvent(new CustomEvent("cart:updated"));
  };

  const addOneToCart = (id?: number) => {
    const targetId = id ?? book_id;
    if (!targetId) return;

    const bookIds = getBooksFromStorage();
    const nextBookIds = [...bookIds, targetId];
    setBookIdsInCart(nextBookIds);
  };

  const removeOneFromCart = (id?: number) => {
    const targetId = id ?? book_id;
    if (!targetId) return;

    const bookIds = getBooksFromStorage();
    const index = bookIds.indexOf(targetId);
    if (index === -1) return;
    const nextBookIds = [...bookIds.slice(0, index), ...bookIds.slice(index + 1)];
    setBookIdsInCart(nextBookIds);
  };

  const removeAllFromCart = (id?: number) => {
    const targetId = id ?? book_id;
    if (!targetId) return;

    const bookIds = getBooksFromStorage();
    const nextBookIds = bookIds.filter((i) => i !== targetId);
    setBookIdsInCart(nextBookIds);
  };

  return {
    addOneToCart,
    removeOneFromCart,
    removeAllFromCart,
    cartBooks
  };
};
