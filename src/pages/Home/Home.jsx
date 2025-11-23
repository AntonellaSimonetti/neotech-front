import { useProducts } from "../../hooks/useProducts";

export default function Home() {
  const { products, loading, error } = useProducts();

  if (loading) return <p className="loading-text">Cargando productos...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="home-container">
      <h1 className="home-title">Productos disponibles</h1>

      <div className="products-grid">
        {products.map(prod => (
          <div key={prod._id} className="product-card">
            <img
              src={prod.imagen || "https://via.placeholder.com/200"}
              alt={prod.nombre}
              className="product-img"
            />

            <h3 className="product-name">{prod.nombre}</h3>
            <p className="product-price">${prod.precio}</p>
            <p className="product-cat">{prod.categoria}</p>

            <button className="product-btn">
              Ver más
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
