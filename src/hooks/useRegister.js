import { useState } from "react";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");

  const registerUser = async (formData) => {
    setLoading(true);
    setError("");
    setMsg("");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/register`,  
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Error al registrarse");
        setLoading(false);
        return false;
      }

      setMsg("Cuenta creada correctamente ");
      setLoading(false);
      return true;

    } catch (err) {
      setError("Error en el servidor");
      setLoading(false);
      return false;
    }
  };

  return {
    loading,
    error,
    msg,
    registerUser
  };
};
