import { useCart } from "@/hooks/useCart";
import { ShoppingCartIcon as ShoppingCartIconSolid } from "@heroicons/react/24/solid";
import { ShoppingCartIcon as ShoppingCartIconOutline } from "@heroicons/react/24/outline";
import { useToast } from "@/hooks/useToast";
import { ToastsViewport } from "@/components/toasts_viewport/ToastsViewport";

export const AddToCartButton = ({ book_id }: { book_id: number }) => {
  const { toggleBookInCart, isBookInCart } = useCart({ book_id });
  const { showToast, toasts } = useToast();

  const handleClick = () => {
    toggleBookInCart();
    showToast(
      isBookInCart() ? "Relato eliminado del carrito" : "Relato agregado al carrito",
      { type: isBookInCart() ? "error" : "success", duration: 3000 }
    );
  };

  return (
    <>
      <button
        className="add-to-cart__button"
        onClick={handleClick}
        type="button"
      >
        {isBookInCart() ? (
          <ShoppingCartIconSolid />
        ) : (
          <ShoppingCartIconOutline />
        )}
      </button>
      <ToastsViewport toasts={toasts} />
    </>
  );
};
