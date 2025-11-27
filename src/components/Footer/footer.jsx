import "./footer.css";
import { Link } from "react-router-dom";  

export const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 — Página hecha por   
        <Link to="https://www.linkedin.com/in/antonellasimonetti98"><span> Antonella Simonetti </span></Link> & 
        <Link to="https://www.linkedin.com/in/clara-farias-a5872337/"><span> Clara Farias</span></Link></p>
    </footer>
  );
};