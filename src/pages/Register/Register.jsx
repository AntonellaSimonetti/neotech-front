import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";

export default function Register() {
  const navigate = useNavigate();
  const { loading, error, msg, registerUser } = useRegister();

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const success = await registerUser(form);

    if (success) {
      setTimeout(() => {
        navigate("/login");
      }, 1500);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Crear Cuenta</h2>

        <form onSubmit={handleSubmit}>
          <input
            className="auth-input"
            type="text"
            name="nombre"
            placeholder="Nombre completo"
            value={form.nombre}
            onChange={handleChange}
          />

          <input
            className="auth-input"
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="auth-input"
            type="password"
            name="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={handleChange}
          />

          {error && <p className="auth-error">{error}</p>}
          {msg && <p className="auth-success">{msg}</p>}

          <button className="auth-btn" type="submit" disabled={loading}>
            {loading ? "Creando…" : "Registrarse"}
          </button>
        </form>

        <p className="auth-link">
          ¿Ya tenés cuenta?
          <Link to="/login"> Iniciar sesión</Link>
        </p>
      </div>
    </div>
  );
}
