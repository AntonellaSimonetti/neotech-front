import { useState, useEffect } from "react";

export function useWishlist() {
  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const [wishlist, setWishlist] = useState([]);
  const isLogged = !!token;

  const headers = {
    "Content-Type": "application/json",
    Authorization: token ? `Bearer ${token}` : "",
  };

  const fetchLocalWishlist = async () => {
    const localIds = JSON.parse(localStorage.getItem("wishlist") || "[]");

    if (localIds.length === 0) {
      setWishlist([]);
      return;
    }

    try {
      const requests = localIds.map((id) =>
        fetch(`${API}/api/products/${id}`).then((res) => res.json())
      );

      const products = await Promise.all(requests);
      setWishlist(products);
    } catch (err) {
      console.log("Error cargando wishlist local:", err);
    }
  };

  const fetchDBWishlist = async () => {
    try {
      const res = await fetch(`${API}/api/wishlist`, { headers });
      const data = await res.json();
      setWishlist(data);
    } catch (err) {
      console.log("Error cargando wishlist:", err);
    }
  };

  const fetchWishlist = async () => {
    if (!isLogged) return fetchLocalWishlist();
    return fetchDBWishlist();
  };

  const addToWishlist = async (productId) => {
    if (!isLogged) {
      let local = JSON.parse(localStorage.getItem("wishlist") || "[]");

      if (!local.includes(productId)) {
        local.push(productId);
        localStorage.setItem("wishlist", JSON.stringify(local));
      }

      fetchLocalWishlist();
      return;
    }

    try {
      await fetch(`${API}/api/wishlist/add`, {
        method: "POST",
        headers,
        body: JSON.stringify({ productId }),
      });

      fetchDBWishlist();
    } catch (err) {
      console.log("Error agregando wishlist:", err);
    }
  };


  const removeFromWishlist = async (productId) => {
    if (!isLogged) {
      let local = JSON.parse(localStorage.getItem("wishlist") || "[]");
      local = local.filter((id) => id !== productId);
      localStorage.setItem("wishlist", JSON.stringify(local));
      return fetchLocalWishlist();
    }

    try {
      await fetch(`${API}/api/wishlist/remove`, {
        method: "DELETE",
        headers,
        body: JSON.stringify({ productId }),
      });

      fetchDBWishlist();
    } catch (err) {
      console.log("Error removiendo wishlist:", err);
    }
  };

  useEffect(() => {
    fetchWishlist();
  }, [isLogged]);

  return { wishlist, addToWishlist, removeFromWishlist, isLogged };
}
