import React from "react";
import "./CardPizza.css";

const CardPizza = ({ name, price, img, ingredients, coupon }) => {
  return (
    <div className="card m-3" style={{ width: "18rem" }}>
      <img src={img} className="card-img-top" alt={name} />

      <div className="card-body">
        <h5 className="card-title text-capitalize">{name}</h5>

        {coupon && (
          <p className="text-success mb-2">
            <strong>Cupón:</strong> {coupon.code} — {coupon.discount}% off
          </p>
        )}

        <p><strong>Ingredientes:</strong></p>
        <ul>
          {ingredients.map((ing, i) => (
            <li key={i}>{ing}</li>
          ))}
        </ul>

        <p className="mt-3 fw-bold">Precio: ${price.toLocaleString()}</p>

        <button className="btn btn-dark w-100">Añadir 🛒</button>
      </div>
    </div>
  );
};

export default CardPizza;
