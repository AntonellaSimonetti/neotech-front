import "./Header.css";
import NavBar from "../NavBar/NavBar";
export default function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <h1 className="logo">
          Neo<span>Tech</span> <span className="accent">Accessories</span>
        </h1>
      </div>
      <NavBar />
    </header>
  );
}