// ProductModal.jsx
import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import { X, Heart, ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const { addToCart } = useCart();
  const { wishlist, addToWishlist, isLogged } = useWishlist();

  const inWishlist = wishlist.includes(product._id);

  const handleAddToCart = async () => {
    if (!isLogged) {
      toast.error("Tenés que iniciar sesión para agregar al carrito.");
      return;
    }

    try {
      await addToCart(product._id);
      toast.success("Producto agregado al carrito ");
      onClose();
    } catch (err) {
      toast.error("No se pudo agregar al carrito");
    }
  };

  const handleAddToWishlist = async () => {
    if (inWishlist) {
      toast("Este producto ya está en favoritos ");
      return;
    }

    try {
      await addToWishlist(product._id);
      toast.success("Agregado a Favoritos ");
    } catch (err) {
      toast.error("No se pudo agregar a favoritos");
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <X size={22} />
        </button>

        <img
          src={product.imagen || "https://via.placeholder.com/400"}
          alt={product.nombre}
          className="modal-img"
        />

        <h2 className="modal-title">{product.nombre}</h2>

        <p className="modal-desc">{product.descripcion}</p>
        <p className="modal-price">${product.precio}</p>

        <p className="modal-info">Categoría: {product.categoria}</p>
        <p className="modal-info">Stock: {product.stock}</p>

        <button className="modal-btn" onClick={handleAddToWishlist}>
          <Heart size={18} />
          {inWishlist ? "Ya en Favoritos" : "Agregar a Favoritos"}
        </button>

        <button className="modal-btn" onClick={handleAddToCart}>
          <ShoppingCart size={18} />
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
