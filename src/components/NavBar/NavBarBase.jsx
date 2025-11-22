import { Link } from "react-router-dom";
import "./NavBarBase.css";

function navBarBase() {
  return (
    <div className="navbar-links">
      <Link to="/" className="nav-link">
        Inicio
      </Link>

      <Link to="/category" className="nav-link">
        Categorias
      </Link>

      <Link to="/contact" className="nav-link">
        Contacto
      </Link>

    </div>
  );
}

export default navBarBase;
