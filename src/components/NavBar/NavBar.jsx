import { LogIn, User, LogOut, ShoppingCart } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import "./NavBar.css";
import { useState } from "react";

export default function NavBar() {
  const { isAdmin, isLogged } = useAuthStatus();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const storedUser = JSON.parse(localStorage.getItem("user"));


  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  const closeMenu = () => setOpen(false);

  return (
    <>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <nav className="nav-bar">
        <ul className={`nav-menu ${open ? "active" : ""}`}>
          {isAdmin ? (
            <>
              <li>
                <Link className="nav-item" to="/admin" onClick={closeMenu}>
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  className="nav-item"
                  to="/admin/productos"
                  onClick={closeMenu}
                >
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  className="nav-item"
                  to="/admin/ordenes"
                  onClick={closeMenu}
                >
                  Órdenes
                </Link>
              </li>

              <li
                className="btn-login"
                onClick={() => {
                  closeMenu();
                  handleLogout();
                }}
              >
                <span>{storedUser?.nombre || "Dueño"}</span>
                <LogOut size={18} />
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="nav-item" to="/" onClick={closeMenu}>
                  Inicio
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/accesorios" onClick={closeMenu}>
                  Accesorios
                </Link>
              </li>
              <li>
                <Link
                  className="nav-item"
                  to="/computadoras"
                  onClick={closeMenu}
                >
                  Computadoras
                </Link>
              </li>
              <li>
                <Link
                  className="nav-item"
                  to="/misionvision"
                  onClick={closeMenu}
                >
                  Acerca de...
                </Link>
              </li>
              <li>
                <Link className="nav-item" to="/contacto" onClick={closeMenu}>
                  Contacto
                </Link>
              </li>

              {isLogged ? (
                <>
                  <li>
                    <Link className="nav-item" to="/perfil" onClick={closeMenu}>
                      Perfil
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-item"
                      to="/mis-compras"
                      onClick={closeMenu}
                    >
                      Mis Compras
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="nav-item"
                      to="/favoritos"
                      onClick={closeMenu}
                    >
                      Favoritos
                    </Link>
                  </li>

                  <li
                    className="btn-login"
                    onClick={() => {
                      closeMenu();
                      handleLogout();
                    }}
                  >
                    <span>{storedUser?.nombre || "Cliente"}</span>
                    <LogOut size={18} />
                  </li>

                  <li className="cart-wrapper">
                    <Link to="/carrito" onClick={closeMenu}>
                      <i className="cart-icon">🛒</i>
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link className="btn-login" to="/login" onClick={closeMenu}>
                      <LogIn size={18} />
                      Iniciar sesión
                    </Link>
                  </li>
                </>
              )}
            </>
          )}
        </ul>
      </nav>
    </>
  );
}
