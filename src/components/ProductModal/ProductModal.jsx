import { useCart } from "../../hooks/useCart";
import "./ProductModal.css";

export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  const { addToCart } = useCart();

  const handleAddToCart = async () => {
    await addToCart(product._id);
    alert("Producto agregado al carrito ✔");
    onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={onClose}>
          ✕
        </button>

        <img
          src={product.imagen || "https://via.placeholder.com/400"}
          alt={product.nombre}
          className="modal-img"
        />

        <h2 className="modal-title">{product.nombre}</h2>

        <p className="modal-desc">{product.descripcion}</p>
        <p className="modal-price">${product.precio}</p>

        <p className="modal-cat">Categoría: {product.categoria}</p>
        <p className="modal-stock">Stock: {product.stock}</p>

        <button className="modal-btn" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}
