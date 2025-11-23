import { useWishlist } from "../../hooks/useWishlist";
import "./User.css";

export default function Wishlist() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="user-container">
      <h1 className="user-title">Mis Favoritos</h1>

      {wishlist.length === 0 ? (
        <p>No tenés productos en favoritos.</p>
      ) : (
        <div className="products-grid">
          {wishlist.map(p => (
            <div key={p._id} className="product-card">
              <img src={p.imagen} alt={p.nombre} className="product-img" />
              <h3>{p.nombre}</h3>
              <p>${p.precio}</p>

              <button
                className="admin-delete-btn"
                onClick={() => removeFromWishlist(p._id)}
              >
                Quitar
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
