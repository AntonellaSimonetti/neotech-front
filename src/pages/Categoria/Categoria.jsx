import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import ProductModal from "../../components/ProductModal/ProductModal";
import "./Categoria.css";

export default function Categoria() {
  const { categoria } = useParams(); // <- recibe la categoría desde el link
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const openModal = (prod) => setSelectedProduct(prod);
  const closeModal = () => setSelectedProduct(null);

  if (loading) return <p className="loading-text">Cargando productos...</p>;
  if (error) return <p className="error-text">{error}</p>;

  // Filtrar productos según la categoría del link
  const filteredProducts = products.filter((p) => p.categoria === categoria);

  return (
    <div className="categoria-container">
      <h1 className="categoria-title"> {categoria}</h1>

      <div className="products-grid">
        {filteredProducts.map((prod) => (
          <div key={prod._id} className="product-card">
            <img
              src={prod.imagen || "https://via.placeholder.com/200"}
              alt={prod.nombre}
              className="product-img"
            />

            <h3 className="product-name">{prod.nombre}</h3>
            <p className="product-price">${prod.precio}</p>
            <p className="product-cat">{prod.categoria}</p>

            <button className="product-btn" onClick={() => openModal(prod)}>
              Ver más
            </button>
          </div>
        ))}
      </div>

      <ProductModal product={selectedProduct} onClose={closeModal} />
    </div>
  );
}
