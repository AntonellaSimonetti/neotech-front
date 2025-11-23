import { useEffect, useState } from "react";

export function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_API_URL;

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/api/products`);
      if (!res.ok) throw new Error("Error cargando productos");

      const data = await res.json();
      setProducts(data);

    } catch (err) {
      setError("No se pudieron obtener los productos");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { products, loading, error };
}
