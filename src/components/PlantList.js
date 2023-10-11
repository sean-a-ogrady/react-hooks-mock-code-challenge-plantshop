import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, setPlants, url }) {
  function toggleInStock(id) {
    // Ran out of time trying to persist the plants change
    // Most convoluted way to do a simple non-persisting toggle
    setPlants(plants.map(plant => plant.id === id ? {...plant, inStock: !plant.inStock} : plant))
  }
  return (
    <ul className="cards">{plants.map(plant =>
      <PlantCard
        key={plant.id}
        id={plant.id}
        name={plant.name}
        image={plant.image}
        price={plant.price}
        inStock={plant.inStock}
        toggleInStock={toggleInStock}
      />)}</ul>
  );
}

export default PlantList;
