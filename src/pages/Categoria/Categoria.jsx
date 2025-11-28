import { useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { useParams } from "react-router-dom";
import ProductModal from "../../components/productmodal/ProductModal";
import "./Categoria.css";

export default function Categoria() {
  const { categoria } = useParams();
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [search, setSearch] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [order, setOrder] = useState("");

  const openModal = (prod) => setSelectedProduct(prod);
  const closeModal = () => setSelectedProduct(null);

  if (loading) return <p className="loading-text">Cargando productos...</p>;
  if (error) return <p className="error-text">{error}</p>;

  let filtered = products.filter((p) => p.categoria === categoria);

  if (search.trim() !== "") {
    filtered = filtered.filter((p) =>
      p.nombre.toLowerCase().includes(search.toLowerCase())
    );
  }

  if (maxPrice !== "") {
    filtered = filtered.filter((p) => p.precio <= Number(maxPrice));
  }

  if (order === "asc") filtered = filtered.sort((a, b) => a.precio - b.precio);
  if (order === "desc") filtered = filtered.sort((a, b) => b.precio - a.precio);

  return (
    <div className="categoria-container">

      <h1 className="categoria-title">{categoria}</h1>

      <div className="filtros-container">
        
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="filtro-input"
        />

        <input
          type="number"
          placeholder="Precio máximo"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="filtro-input"
        />


      </div>

      <div className="products-grid">
        {filtered.map((prod) => (
          <div key={prod._id} className="product-card">
            
            <img
              src={prod.imagen || "https://via.placeholder.com/200"}
              alt={prod.nombre}
              className="product-img"
            />

            <h3 className="product-name">{prod.nombre}</h3>
            <p className="product-price">${prod.precio}</p>

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
