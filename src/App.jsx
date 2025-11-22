import Header from "./components/header/header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import MisionVision from "./pages/MisionVision";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/productos" element={<h1>Productos</h1>} />
        <Route path="/categorias" element={<h1>Categorías</h1>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/misionvision" element={<MisionVision />} />

      </Routes>
      <Footer />
    </Router>

    

  );
}