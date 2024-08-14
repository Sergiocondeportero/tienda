import React from "react";

export default function Profile({ user }) {
  return (
    <div>
      <h2>Perfil</h2>
      {user ? (
        <div>
          <p>Nombre de usuario: {user}</p>
          <button>Cerrar sesión</button>
        </div>
      ) : (
        <p>Debes iniciar sesión para ver tu perfil.</p>
      )}
    </div>
  );
}
