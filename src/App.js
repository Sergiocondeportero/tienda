import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Contact from "./pages/Contact"; // Importa el nuevo componente de contacto
import NotFound from "./pages/NotFound";
import NavBar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [user, setUser] = useState(null);

  const products = [
    { id: 1, name: "Producto 1", price: "$10", image: "/images/pikachu.jpg", category: "Electronics" },
    { id: 2, name: "Producto 2", price: "$20", image: "/images/pikachu.jpg", category: "Clothing" },
    { id: 3, name: "Producto 3", price: "$30", image: "/images/pikachu.jpg", category: "Electronics" },
    { id: 4, name: "Producto 4", price: "$40", image: "/images/pikachu.jpg", category: "Clothing" },
    { id: 5, name: "Producto 5", price: "$50", image: "/images/pikachu.jpg", category: "Books" },
  ];

  const handleAddToCart = (product) => {
    const existingProduct = cart.find((item) => item.id === product.id);
    if (existingProduct) {
      setCart(
        cart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveFromCart = (index) => {
    setCart(cart.filter((_, i) => i !== index));
  };

  const handleUpdateQuantity = (index, quantity) => {
    setCart(
      cart.map((item, i) =>
        i === index ? { ...item, quantity: quantity } : item
      )
    );
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Header />
      <Menu user={user} onLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route 
          path="/products" 
          element={<Products onAddToCart={handleAddToCart} />} 
        />
        <Route 
          path="/product/:id" 
          element={<ProductDetail products={products} onAddToCart={handleAddToCart} />} 
        />
        <Route 
          path="/cart" 
          element={
            <Cart 
              cart={cart} 
              onRemoveFromCart={handleRemoveFromCart} 
              onUpdateQuantity={handleUpdateQuantity} 
              onClearCart={handleClearCart} 
            />} 
        />
        <Route 
          path="/login" 
          element={<Login onLogin={handleLogin} />} 
        />
        <Route 
          path="/profile" 
          element={<Profile user={user} />} 
        />
        <Route 
          path="/contact" 
          element={<Contact />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

