import { useCart } from "../../hooks/useCart";
import { useWishlist } from "../../hooks/useWishlist";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const { addToCart } = useCart();
  const { wishlist, addToWishlist, isLogged } = useWishlist();

  const inWishlist = wishlist.includes(product._id);

  const handleAddToCart = async () => {
    if (!isLogged) {
      alert("Tenés que iniciar sesión para agregar al carrito.");
      return;
    }

    await addToCart(product._id);
    alert("Producto agregado al carrito ✔");
    onClose();
  };

  const handleAddToWishlist = () => {
    if (inWishlist) {
      alert("Este producto ya está en favoritos ❤");
      return;
    }

    addToWishlist(product._id);
    alert("Agregado a Favoritos ❤");
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={onClose}>✕</button>

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
          {inWishlist ? "💖 Ya en Favoritos" : "❤️ Agregar a Favoritos"}
        </button>

        <button className="modal-btn" onClick={handleAddToCart}>
          🛒 Agregar al carrito
        </button>
      </div>
    </div>
  );
}
