import "./footer.css";
import { Link } from "react-router-dom";  

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 — Página hecha por <Link to="/misionvision"><span>Antonella Simonetti & Clara Farias</span></Link></p>
    </footer>
  );
};