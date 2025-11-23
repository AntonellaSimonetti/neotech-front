import { useState, useEffect } from "react";

export function useWishlist() {
  const [wishlist, setWishlist] = useState([]);
  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  const fetchWishlist = async () => {
    const res = await fetch(`${API}/api/wishlist`, { headers });
    const data = await res.json();
    setWishlist(data);
  };

  const addToWishlist = async (productId) => {
    await fetch(`${API}/api/wishlist/add`, {
      method: "POST",
      headers,
      body: JSON.stringify({ productId })
    });
    fetchWishlist();
  };

  const removeFromWishlist = async (productId) => {
    await fetch(`${API}/api/wishlist/remove`, {
      method: "DELETE",
      headers,
      body: JSON.stringify({ productId })
    });
    fetchWishlist();
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return { wishlist, addToWishlist, removeFromWishlist };
}
