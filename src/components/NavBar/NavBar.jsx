import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import { ShoppingCart, Menu, X, Heart, User, LogOut } from "lucide-react";
import "./NavBar.css";

export default function NavBar() {
  const { isAdmin, isLogged } = useAuthStatus();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);
  const closeMenu = () => setOpen(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    closeMenu();
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <button className="hamburger" onClick={toggleMenu}>
        {open ? <X size={28}/> : <Menu size={28} />}
      </button>

      <nav className="nav-bar">
        <ul className={`nav-menu ${open ? "active" : ""}`}>

          {isAdmin ? (
            <>
              <li><Link to="/admin" className="nav-item" onClick={closeMenu}>Estadística</Link></li>
              <li><Link to="/admin/productos" className="nav-item" onClick={closeMenu}>Productos</Link></li>
              <li><Link to="/admin/ordenes" className="nav-item" onClick={closeMenu}>Órdenes</Link></li>

              <li className="nav-item logout" onClick={handleLogout}>
                <LogOut size={18} /> Salir
              </li>
            </>
          ) : (
            <>
              <li><Link to="/" className="nav-item" onClick={closeMenu}>Inicio</Link></li>
              <li><Link to="/accesorios" className="nav-item" onClick={closeMenu}>Accesorios</Link></li>
              <li><Link to="/computadoras" className="nav-item" onClick={closeMenu}>Computadoras</Link></li>
              <li><Link to="/contacto" className="nav-item" onClick={closeMenu}>Contacto</Link></li>
              <li><Link to="/favoritos" className="nav-item" onClick={closeMenu}><Heart size={16}/> Favoritos</Link></li>

              {isLogged ? (
                <>
                  <li><Link to="/perfil" className="nav-item" onClick={closeMenu}><User size={16}/> Perfil</Link></li>
                  <li><Link to="/mis-compras" className="nav-item" onClick={closeMenu}>Mis Compras</Link></li>
                  <li className="cart-wrapper">
                    <Link to="/carrito" onClick={closeMenu}>
                      <ShoppingCart className="cart-icon"/>
                    </Link>
                  </li>
                  <li className="nav-item logout" onClick={handleLogout}>
                    <LogOut size={18}/> Salir
                  </li>

                  
                </>
              ) : (
                <li><Link to="/login" className="nav-item" onClick={closeMenu}>Iniciar sesión</Link></li>
              )}
            </>
          )}

        </ul>
      </nav>
    </>
  );
}
