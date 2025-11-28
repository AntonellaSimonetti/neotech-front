import { useMyOrders } from "../../hooks/useMyOrders";
import "./User.css";

export default function MyOrders() {
  const { orders, loading, error } = useMyOrders();

  if (loading) return <p>Cargando historial...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="user-container">
      <h1 className="user-title">Mis compras</h1>

      {orders.length === 0 ? (
        <p>No tenés compras realizadas.</p>
      ) : (
        <div className="order-list">
          {orders.map(order => (
            <div key={order._id} className="order-card">
              <h3>Orden #{order._id.slice(-6)}</h3>
              <p className="order-status">Estado: {order.status}</p>
              <p className="order-total">Total: ${order.total}</p>

              <div className="order-items">
                {order.items.map(item => (
                  <div key={item.productId._id} className="order-item">
                    <img
                      src={item.productId.imagen}
                      alt={item.productId.nombre}
                      className="order-img"
                    />
                    <div>
                      <p>{item.productId.nombre}</p>
                      <span>Cantidad: {item.quantity}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
