import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <ul className="nav-menu">
        <li><Link className="nav-item" to="/">Inicio</Link></li>
        <li><Link className="nav-item" to="/accesorios">Accesorios</Link></li>
        <li><Link className="nav-item" to="/computadoras">Computadoras</Link></li>
        <li><Link className="nav-item" to="/login">Iniciar sesión</Link></li>
        <li><Link className="nav-item" to="/contact">Contacto</Link></li>
        <li className="cart-wrapper">
          <i className="cart-icon">🛒</i>
        </li>
        
      </ul>
    </nav>
  );
}
