import { useState, useEffect } from "react";

export function useAdminProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${API}/api/products`); 
      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Error al cargar productos");

      setProducts(data);
    } catch (err) {
      setError("Error al cargar productos");
    } finally {
      setLoading(false);
    }
  };

  const createProduct = async (formData) => {
    const res = await fetch(`${API}/api/products`, {
      method: "POST",
      headers,
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error("Error al crear producto");
    fetchProducts();
  };

  const updateProduct = async (id, formData) => {
    const res = await fetch(`${API}/api/products/${id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(formData),
    });
    if (!res.ok) throw new Error("Error al editar producto");
    fetchProducts();
  };

  const deleteProduct = async (id) => {
    const res = await fetch(`${API}/api/products/${id}`, {
      method: "DELETE",
      headers,
    });
    if (!res.ok) throw new Error("Error al eliminar producto");
    fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return {
    products,
    loading,
    error,
    createProduct,
    updateProduct,
    deleteProduct,
  };
}
