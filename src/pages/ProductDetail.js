import React, { useState } from "react";
import { useParams } from "react-router-dom";

export default function ProductDetail({ products, onAddToCart }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const handleAddComment = () => {
    setComments([...comments, comment]);
    setComment("");
  };

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} />
      <p>Precio: {product.price}</p>
      <button onClick={() => onAddToCart(product)}>Añadir al carrito</button>

      <h2>Comentarios</h2>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Escribe un comentario"
      />
      <button onClick={handleAddComment}>Añadir comentario</button>
    </div>
  );
}
