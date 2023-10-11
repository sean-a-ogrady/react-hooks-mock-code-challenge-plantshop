import React from "react";

function PlantCard({id, name, image, price, inStock, toggleInStock}) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {inStock ? (
        <button className="primary" onClick={() => toggleInStock(id)} >In Stock</button>
      ) : (
        <button onClick={() => toggleInStock(id)}>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
