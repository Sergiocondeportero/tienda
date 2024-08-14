import React from "react";

export default function Product({ product, onAddToCart }) {
  const handleAddToCart = () => {
    onAddToCart(product);
    alert(`${product.name} ha sido añadido al carrito.`);
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.name} width="100" />
      <h3>{product.name}</h3>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Añadir al carrito</button>
    </div>
  );
}
