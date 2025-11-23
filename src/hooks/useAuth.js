import { useState } from "react";

export function useAuth() {
  const [error, setError] = useState("");

  const login = async (email, password) => {
    setError("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error al iniciar sesión");
        return null;
      }

      // Guardar token + usuario
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      return data.user;

    } catch (err) {
      setError("Error en el servidor");
      return null;
    }
  };

  return { login, error };
}
