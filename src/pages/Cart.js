import React from "react";
import { Link } from "react-router-dom";

export default function Cart({ cart, onRemoveFromCart, onUpdateQuantity, onClearCart }) {
  const total = cart.reduce((sum, item) => sum + item.quantity * parseFloat(item.price.substring(1)), 0);

  const handleCheckout = () => {
    alert("Tu compra ha sido finalizada con éxito");
    onClearCart();
  };

  return (
    <div>
      <h1>Tu Carrito</h1>
      {cart.length === 0 ? (
        <p>El carrito está vacío. <Link to="/products">Volver a la tienda</Link></p>
      ) : (
        <>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - {item.price} - Cantidad: {item.quantity}
                <button onClick={() => onRemoveFromCart(index)}>Eliminar</button>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(e) => onUpdateQuantity(index, parseInt(e.target.value))}
                />
              </li>
            ))}
          </ul>
          <h2>Total: ${total.toFixed(2)}</h2>
          <button onClick={handleCheckout}>Finalizar Compra</button>
        </>
      )}
    </div>
  );
}



