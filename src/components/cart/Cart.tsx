import { useState } from "react";
import { ShoppingCartIcon, PlusIcon, MinusIcon, TrashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import type { Book } from "@/types/book";
import { useCart } from "@/hooks/useCart";

type SummaryItem = {
    book: Book;
    qty: number;
};

export const Cart = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();
    const { cartBooks, addOneToCart, removeOneFromCart, removeAllFromCart } = useCart({});

    const summaryMap = cartBooks.reduce((acc, book) => {
        if (!acc[book.id]) acc[book.id] = { book, qty: 0 } as SummaryItem;
        acc[book.id].qty += 1;
        return acc;
    }, {} as Record<number, SummaryItem>);

    const summary: SummaryItem[] = Object.values(summaryMap);

    const subTotal: number = cartBooks.reduce((t, b) => t + b.price, 0);

    return (
        <div className={`cart ${open ? "cart--open" : ""}`}>
            <button
                type="button"
                aria-label={open ? "Cerrar carrito" : "Abrir carrito"}
                title={open ? "Cerrar carrito" : "Abrir carrito"}
                aria-expanded={open}
                aria-controls="cart-panel"
                onClick={() => setOpen((v) => !v)}
                className="cart__toggle"
            >
                <div className="cart__toggle-inner">
                    <ShoppingCartIcon width={28} height={28} color="white" />
                    <span className="sr-only">{open ? "Cerrar carrito" : "Abrir carrito"}</span>
                    {cartBooks.length > 0 && (
                        <span aria-hidden={false} role="status" aria-live="polite" className="cart__badge">
                            {cartBooks.length}
                        </span>
                    )}
                </div>
            </button>

            <aside id="cart-panel" className="cart__panel">
                <div className="cart__header">
                    <h2>Carrito</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="cart__close"
                        type="button"
                        aria-label="Cerrar carrito"
                        title="Cerrar carrito"
                    >
                        <XMarkIcon width={20} height={20} />
                    </button>
                </div>

                {summary.length === 0 ? (
                    <p>El carrito está vacío.</p>
                ) : (
                    <div className="cart__list">
                        {summary.map(({ book, qty }) => (
                            <div key={book.id} className="cart__item">
                                <img src={book.image} alt={book.title} className="cart__item-image" />
                                <div className="cart__item-info">
                                    <div className="cart__item-header">
                                        <strong className="cart__item-title">{book.title}</strong>
                                        <span className="cart__item-price">${book.price.toFixed(2)}</span>
                                    </div>
                                    <div className="cart__qty">
                                        <button onClick={() => removeOneFromCart(book.id)} type="button" className="cart__btn cart__btn--small" aria-label="Disminuir">
                                            <MinusIcon width={16} height={16} />
                                        </button>
                                        <span className="cart__qty-value">{qty}</span>
                                        <button onClick={() => addOneToCart(book.id)} type="button" className="cart__btn cart__btn--small" aria-label="Aumentar">
                                            <PlusIcon width={16} height={16} />
                                        </button>
                                        <button onClick={() => removeAllFromCart(book.id)} type="button" className="cart__btn cart__btn--ghost cart__remove" aria-label="Eliminar">
                                            <TrashIcon width={16} height={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <div className="cart__subtotal">
                            <div className="cart__subtotal-row">
                                <span>Subtotal</span>
                                <strong>${subTotal.toFixed(2)}</strong>
                            </div>
                            <button
                                onClick={() => {
                                    setOpen(false);
                                    navigate("/checkout");
                                }}
                                className="cart__checkout-button"
                            >
                                Ir al checkout
                            </button>
                        </div>
                    </div>
                )}
            </aside>
        </div>
    );
};