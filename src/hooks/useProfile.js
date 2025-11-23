import { useState, useEffect } from "react";

export function useProfile() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("token");

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`
  };

  useEffect(() => {
    const fetchProfile = async () => {
      const res = await fetch(`${API}/api/profile`, { headers });
      const data = await res.json();
      setProfile(data);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  const updateProfile = async (fields) => {
    const res = await fetch(`${API}/api/profile`, {
      method: "PUT",
      headers,
      body: JSON.stringify(fields)
    });

    const updated = await res.json();
    setProfile(updated);
    return updated;
  };

  return { profile, loading, updateProfile };
}
