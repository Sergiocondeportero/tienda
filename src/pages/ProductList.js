import React, { useState } from "react";
import "../App.css"; // Importa el archivo CSS para los estilos
import Product from "../components/Product";

export default function ProductList({ onAddToCart }) {
  const [cart, setCart] = useState([]);

  const products = [
    { id: 1, name: "Producto 1", price: "$10", image: "/images/pikachu.jpg" },
    { id: 2, name: "Producto 2", price: "$20", image: "/images/pikachu.jpg" },
    { id: 3, name: "Producto 3", price: "$30", image: "/images/pikachu.jpg" },
    { id: 4, name: "Producto 4", price: "$40", image: "/images/pikachu.jpg" },
    { id: 5, name: "Producto 5", price: "$50", image: "/images/pikachu.jpg" },
  ];

  return (
    <div>
      <h1>Catálogo de Productos</h1>
      <div className="product-list">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}

