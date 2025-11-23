import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import FormInput from "../components/form-input/FormInput";
import { Key, Mail, LogOut } from "lucide-react";
import { useAuth } from "../components/context/AuthContext";

export default function Login() {
  const { login, error, user, isLogin, logOut } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await login(email, password);

    if (user && user.rol === "admin") {
      navigate("/");
    } else if (user) {
      navigate("/misionvision");
    }
  };

  // ⛔ Ya está logueado → Mostrar mensaje
  if (isLogin && user) {
    return (
      <div className="login-container">
        <div className="login-card">
          <h2>Sesión ya iniciada</h2>
          <p>
            Ya tenés una sesión iniciada como <b>{user.nombre}</b>.
          </p>
          <p>¿Qué deseas hacer?</p>

          <div className="login-options">
            <button onClick={() => navigate("/")} className="button">Continuar</button>
          
          
            <button onClick={logOut} className="button">
              <LogOut size={18} className="icon" /> Cerrar sesión
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ✔ No está logueado → Formulario normal
  return (
    <div className="login-container">
      <div className="login-card">
        <h2>Iniciar Sesión</h2>

        <form onSubmit={handleSubmit}>
          <FormInput
            icon={<Mail size={18} />}
            labelText="Email"
            inputType="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <FormInput
            icon={<Key size={18} />}
            labelText="Contraseña"
            inputType="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit">Entrar</button>
        </form>

        <p className="login-register-link">
          ¿No tenés cuenta? <Link to="/register">Crear cuenta</Link>
        </p>
      </div>
    </div>
  );
}
