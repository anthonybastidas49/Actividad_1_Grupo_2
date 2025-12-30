import type { Book } from "@/types/book";

export const useCartBillingDetail = ({books}: {books: Book[]}) => {
    const subTotalPrice = books.reduce((total, book) => total + book.price, 0);
    const taxRate = 0.15;
    const taxAmount = subTotalPrice * taxRate;
    const totalPrice = subTotalPrice + taxAmount;

    return {
        subTotalPrice,
        taxAmount,
        totalPrice
    };
};