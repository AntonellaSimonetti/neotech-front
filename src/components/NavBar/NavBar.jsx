import { Link, useNavigate } from "react-router-dom";
import { useAuthStatus } from "../../hooks/useAuthStatus";
import "./NavBar.css";

export default function NavBar() {
  const { isAdmin, isLogged } = useAuthStatus();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
    window.location.reload();
  };

  return (
    <nav className="nav-bar">
      <ul className="nav-menu">

        {/* 🔹 ADMIN */}
        {isAdmin ? (
          <>
            <li><Link className="nav-item" to="/admin">Dashboard</Link></li>
            <li><Link className="nav-item" to="/admin/productos">Productos</Link></li>
            <li><Link className="nav-item" to="/admin/ordenes">Órdenes</Link></li>

            <li className="nav-item" style={{ cursor: "pointer" }} onClick={handleLogout}>
              Salir
            </li>
          </>
        ) : (
          <>
            {/* 🔹 USUARIO NORMAL / PUBLICO */}
            <li><Link className="nav-item" to="/">Inicio</Link></li>
            <li><Link className="nav-item" to="/accesorios">Accesorios</Link></li>
            <li><Link className="nav-item" to="/computadoras">Computadoras</Link></li>

            {/* 🔹 SI ESTÁ LOGUEADO → mostrar menú user */}
            {isLogged ? (
              <>
                <li><Link className="nav-item" to="/perfil">Perfil</Link></li>
                <li><Link className="nav-item" to="/mis-compras">Mis compras</Link></li>
                <li><Link className="nav-item" to="/favoritos">Favoritos</Link></li>

                <li className="nav-item" style={{ cursor: "pointer" }} onClick={handleLogout}>
                  Salir
                </li>

                <li className="cart-wrapper">
                  <Link to="/carrito">
                    <i className="cart-icon">🛒</i>
                  </Link>
                </li>
              </>
            ) : (
              <>
                {/* 🔹 NO logueado */}
                <li><Link className="nav-item" to="/login">Iniciar sesión</Link></li>

                <li className="cart-wrapper">
                  <Link to="/login">
                    <i className="cart-icon">🛒</i>
                  </Link>
                </li>
              </>
            )}
          </>
        )}
      </ul>
    </nav>
  );
}
