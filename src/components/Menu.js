import React from "react";
import { Link } from "react-router-dom";

export default function Menu({ user, onLogout }) {
  return (
    <div className="menu">
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/about">Acerca de</Link></li>
        <li><Link to="/products">Productos</Link></li>
        <li><Link to="/cart">Carrito</Link></li>
        <li><Link to="/contact">Contacto</Link></li>
        {!user ? (
          <li><Link to="/login">Iniciar sesión</Link></li>
        ) : (
          <>
            <li><Link to="/profile">Perfil</Link></li>
            <li><button onClick={onLogout}>Cerrar sesión</button></li>
          </>
        )}
      </ul>
    </div>
  );
}
