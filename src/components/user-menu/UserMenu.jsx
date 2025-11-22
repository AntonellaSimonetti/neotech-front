// UserMenu.jsx
import { LogIn, User, LogOut, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./UserMenu.css";

function UserMenu({ isLogin, user, logOut }) {
  const [open, setOpen] = useState(false);

  // Si NO está logueado -> botón Acceder
  if (!isLogin) {
    return (
      <Link to="/login" className="btn-login">
        <LogIn size={18} />
        <span>Acceder</span>
      </Link>
    );
  }

  // Si está logueado -> menú con nombre
  return (
    <div className="menu-container">
      <button onClick={() => setOpen(!open)} className="menu-button">
        <User size={18} />
        <span>{user?.nombre || "Usuario"}</span>
      </button>

      {open && (
        <div className="menu-dropdown">
          <Link to="/perfil" className="menu-item">
            <User size={18} className="icon" /> Perfil
          </Link>

          <Link to="/carrito" className="menu-item">
            <ShoppingCart size={18} className="icon" /> Carrito
          </Link>

          <button onClick={logOut} className="menu-item btn-logout">
            <LogOut size={18} className="icon" /> Salir
          </button>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
