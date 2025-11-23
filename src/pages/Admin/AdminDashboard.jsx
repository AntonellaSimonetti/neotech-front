import { useAdminDashboard } from "../../hooks/useAdminDashboard";

export default function AdminDashboard() {
  const { stats, loading, error } = useAdminDashboard();

  if (loading) return <p>Cargando métricas...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="admin-container">

      <h1 className="admin-title">Panel de Administración</h1>

      <div className="admin-grid">
        <div className="admin-card">
          <div className="admin-number">{stats.users}</div>
          <div className="admin-label">Usuarios Registrados</div>
        </div>

        <div className="admin-card">
          <div className="admin-number">{stats.sales}</div>
          <div className="admin-label">Ventas Totales</div>
        </div>

        <div className="admin-card">
          <div className="admin-number">${stats.revenue}</div>
          <div className="admin-label">Total Facturado</div>
        </div>
      </div>

      <h2 className="admin-section-title">Top productos vendidos</h2>
      <ul className="admin-list">
        {stats.best.map(item => (
          <li key={item._id}>
            {item.producto.nombre} — {item.cantidadVendida} ventas
          </li>
        ))}
      </ul>

      <h2 className="admin-section-title">Estado de órdenes</h2>
      <ul className="admin-list">
        {stats.status.map(s => (
          <li key={s._id}>
            {s._id}: {s.cantidad}
          </li>
        ))}
      </ul>

    </div>
  );
}
