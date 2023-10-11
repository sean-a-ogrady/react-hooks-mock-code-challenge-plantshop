import React from "react";

function PlantCard({ id, name, image, price, inStock, toggleInStock, selectedPlant, setSelectedPlant, setShowPriceChangeForm }) {
  return (
    <li className="card">
      <img src={image} alt={name} onClick={() => {
        if (selectedPlant.id === id){
          setShowPriceChangeForm(false);
          setSelectedPlant({});
        } else {
          setShowPriceChangeForm(true);
          setSelectedPlant({ id: id, name: name, image: image, price: price, inStock: inStock })
        }
      }} />
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
