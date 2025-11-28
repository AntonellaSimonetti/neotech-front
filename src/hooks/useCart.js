import { useState, useEffect } from "react";

export function useCart() {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };

  const fetchCart = async () => {
    try {
      const res = await fetch(`${API}/api/cart`, { headers });
      if (!res.ok) throw new Error("Error al cargar carrito");
      const data = await res.json();
      setCart(data);
    } catch (err) {
      setError("Error cargando carrito");
    } finally {
      setLoading(false);
    }
  };


  const addToCart = async (productId) => {
    try {
      const res = await fetch(`${API}/api/cart/add`, {
        method: "POST",
        headers,
        body: JSON.stringify({ productId })
      });

      if (!res.ok) throw new Error("Error agregando producto");
      fetchCart();
    } catch (err) {
      console.error(err);
    }
  };

 
  const updateQuantity = async (productId, quantity) => {
    try {
      const res = await fetch(`${API}/api/cart/update`, {
        method: "PUT",
        headers,
        body: JSON.stringify({ productId, quantity })
      });

      if (!res.ok) throw new Error("Error actualizado");
      fetchCart();
    } catch (err) {
      console.error(err);
    }
  };


  const removeFromCart = async (productId) => {
    try {
      const res = await fetch(`${API}/api/cart/remove`, {
        method: "DELETE",
        headers,
        body: JSON.stringify({ productId })
      });

      if (!res.ok) throw new Error("Error al eliminar");
      fetchCart();
    } catch (err) { console.error(err); }
  };


  const clearCart = async () => {
    try {
      const res = await fetch(`${API}/api/cart/clear`, {
        method: "DELETE",
        headers
      });

      if (!res.ok) throw new Error("Error al vaciar");
      fetchCart();
    } catch (err) { console.error(err); }
  };

  const checkout = async () => {
  try {
    const res = await fetch(`${API}/api/orders/create`, {
      method: "POST",
      headers
    });

    if (!res.ok) throw new Error("Error al finalizar compra");

    // Limpia carrito luego de generar la orden
    clearCart();

    alert("Compra realizada con éxito ✔");

    return true;

  } catch (err) {
    console.error(err);
    alert("No se pudo completar la compra ❌");
    return false;
  }
};

  useEffect(() => {
    fetchCart();
  }, []);

  return {
    cart,
    loading,
    error,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    checkout
  };
}
