import Header from "./components/header/header.jsx";
import { Footer } from "./components/Footer/Footer.jsx";
import Login from "./pages/Login/Login.jsx";
import Register from "./pages/Register/Register.jsx";

import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import AdminProducts from "./pages/Admin/AdminProducts.jsx";
import AdminOrders from "./pages/Admin/AdminOrders.jsx";
import Home from "./pages/Home/Home.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import MyOrders from "./pages/User/MyOrders.jsx";
import Profile from "./pages/User/Profile.jsx";
import Wishlist from "./pages/User/Wishlist.jsx";



import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Header />
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
      </Routes>
      <Footer />
    </Router>

    

  );
}