import { useCart } from "@/hooks/useCart";
import { ShoppingCartIcon as ShoppingCartIconSolid } from "@heroicons/react/24/solid";
import { useToast } from "@/hooks/useToast";
import { ToastsViewport } from "@/components/toasts_viewport/ToastsViewport";

export const AddToCartButton = ({ book_id }: { book_id: number }) => {
  const { addOneToCart } = useCart({ book_id });
  const { showToast, toasts } = useToast();

  const handleClick = () => {
    addOneToCart(book_id);
    showToast("Relato agregado al carrito", { type: "success", duration: 3000 });
  };

  return (
    <>
      <button className="add-to-cart__button" onClick={handleClick} type="button">
        <ShoppingCartIconSolid />
      </button>
      <ToastsViewport toasts={toasts} />
    </>
  );
};
