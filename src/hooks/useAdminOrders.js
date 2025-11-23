import { useState, useEffect } from "react";

export function useAdminOrders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };


  const fetchOrders = async () => {
    try {
      setLoading(true);

      const res = await fetch(`${API}/api/orders`, { headers });

      if (!res.ok) throw new Error("Error cargando órdenes");

      const data = await res.json();
      setOrders(data);

    } catch (err) {
      console.error(err);
      setError("No se pudieron cargar las órdenes");
    } finally {
      setLoading(false);
    }
  };


  const updateOrderStatus = async (id, newStatus) => {
    try {
      const res = await fetch(`${API}/api/orders/${id}`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error("Error actualizando estado");

      await fetchOrders(); 

    } catch (err) {
      console.error(err);
      setError("No se pudo actualizar el estado");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { 
    orders, 
    loading, 
    error, 
    updateOrderStatus 
  };
}
