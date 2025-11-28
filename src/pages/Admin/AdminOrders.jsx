import { useAdminOrders } from "../../hooks/useAdminOrders";
import "./Admin.css";

export default function AdminOrders() {
  const { orders, loading, error, updateOrderStatus } = useAdminOrders();

  if (loading) return <p>Cargando órdenes...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="admin-container">
      <h1 className="admin-title">Gestión de Órdenes</h1>

      {/* vista escritorio */}
      <table className="admin-table admin-table-desktop">
        <thead>
          <tr>
            <th>ID</th>
            <th>Usuario</th>
            <th>Total</th>
            <th>Estado</th>
            <th>Fecha</th>
          </tr>
        </thead>

        <tbody>
          {orders.map(order => (
            <tr key={order._id}>
              <td>{order._id}</td>
              <td>{order.user?.email}</td>
              <td>${order.total}</td>

              <td>
                <select
                  value={order.status}
                  className="admin-select"
                  onChange={(e) =>
                    updateOrderStatus(order._id, e.target.value)
                  }
                >
                  <option value="pendiente">Pendiente</option>
                  <option value="pagado">Pagado</option>
                  <option value="cancelado">Cancelado</option>
                </select>
              </td>

              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* vista mobile */}
      <div className="orders-mobile-list">
        {orders.map(order => (
          <div className="order-card-mobile" key={order._id}>
            
            <p><strong>ID:</strong> {order._id}</p>
            <p><strong>Usuario:</strong> {order.user?.email}</p>
            <p><strong>Total:</strong> ${order.total}</p>

            <div className="mobile-status">
              <label>Estado:</label>
              <select
                value={order.status}
                className="admin-select"
                onChange={(e) =>
                  updateOrderStatus(order._id, e.target.value)
                }
              >
                <option value="pendiente">Pendiente</option>
                <option value="pagado">Pagado</option>
                <option value="cancelado">Cancelado</option>
              </select>
            </div>

            <p><strong>Fecha:</strong> {new Date(order.createdAt).toLocaleDateString()}</p>

          </div>
        ))}
      </div>

    </div>
  );
}
