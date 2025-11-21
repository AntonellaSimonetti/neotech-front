import Header from "./components/header/header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      


      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/productos" element={<h1>Productos</h1>} />
        <Route path="/categorias" element={<h1>Categorías</h1>} />
        <Route path="/login" element={<h1>Login</h1>} />
        <Route path="/register" element={<h1>Registro</h1>} />
      </Routes>
      <Footer />
    </Router>

    

  );
}