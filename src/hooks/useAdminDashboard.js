import { useEffect, useState } from "react";

export function useAdminDashboard() {
  const [stats, setStats] = useState({
    users: 0,
    sales: 0,
    revenue: 0,
    best: [],
    status: []
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("token");
        const headers = {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        };

        console.log("LLAMANDO A:", `${API}/api/admin/users/count`);

        const [
          usersRes,
          salesRes,
          revenueRes,
          bestRes,
          statusRes
        ] = await Promise.all([
          fetch(`${API}/api/admin/users/count`, { headers }),
          fetch(`${API}/api/admin/sales/count`, { headers }),
          fetch(`${API}/api/admin/sales/total`, { headers }),
          fetch(`${API}/api/admin/products/best-sellers`, { headers }),
          fetch(`${API}/api/admin/orders/status`, { headers })
        ]);

        if (!usersRes.ok) throw new Error("Error users");
        if (!salesRes.ok) throw new Error("Error sales");
        if (!revenueRes.ok) throw new Error("Error revenue");
        if (!bestRes.ok) throw new Error("Error best");
        if (!statusRes.ok) throw new Error("Error status");

        const users = await usersRes.json();
        const sales = await salesRes.json();
        const revenue = await revenueRes.json();
        const best = await bestRes.json();
        const status = await statusRes.json();

        setStats({
          users: users.totalUsuarios,
          sales: sales.totalVentas,
          revenue: revenue.totalFacturado,
          best,
          status,
        });

      } catch (err) {
        console.error(err);
        setError("Error cargando métricas");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { stats, loading, error };
}
