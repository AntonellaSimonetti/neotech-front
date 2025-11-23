import { useState, useEffect } from "react";

export function useMyOrders() {
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
      const res = await fetch(`${API}/api/profile/orders`, { headers });
      if (!res.ok) throw new Error("Error cargando historial");
      const data = await res.json();
      setOrders(data);
    } catch (err) {
      setError("No se pudo cargar el historial");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  return { orders, loading, error };
}
