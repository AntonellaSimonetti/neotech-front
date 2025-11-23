export default function ProductModal({ product, onClose }) {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close" onClick={onClose}>✖</button>

        <img className="modal-img" src={product.imagen} alt={product.nombre} />

        <h2 className="modal-title">{product.nombre}</h2>

        <p className="modal-desc">{product.descripcion}</p>

        <p className="modal-info">
          <strong>Precio:</strong> ${product.precio}
        </p>

        <p className="modal-info">
          <strong>Categoría:</strong> {product.categoria}
        </p>

        <p className="modal-info">
          <strong>Stock:</strong> {product.stock}
        </p>

        <button className="modal-btn">Agregar al carrito</button>
      </div>
    </div>
  );
}
