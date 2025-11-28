import Header from "./components/header/header.jsx";
import { Footer } from "./components/footer/Footer.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";
import MisionVision from "./pages/misionvision/MisionVision";
import Contact from "./pages/contact/Contact";
import Categoria from "./pages/categoria/Categoria";
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import AdminProducts from "./pages/admin/AdminProducts.jsx";
import AdminOrders from "./pages/admin/AdminOrders.jsx";
import Home from "./pages/home/Home.jsx";
import Cart from "./pages/cart/Cart.jsx";
import MyOrders from "./pages/user/MyOrders.jsx";
import Profile from "./pages/user/Profile.jsx";
import Wishlist from "./pages/user/Wishlist.jsx";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="app-container">
        
        <Header />

        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<h1>Productos</h1>} />
            <Route path="/categorias" element={<h1>Categorías</h1>} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/productos" element={<AdminProducts />} />
            <Route path="/admin/ordenes" element={<AdminOrders />} />
            <Route path="/carrito" element={<Cart />} />
            <Route path="/mis-compras" element={<MyOrders />} />
            <Route path="/perfil" element={<Profile />} />
            <Route path="/favoritos" element={<Wishlist />} />
            <Route path="/misionvision" element={<MisionVision />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/:categoria" element={<Categoria />} />
            
           
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}
