import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = " http://localhost:6001/plants/";

  const [plantList, setPlantList] = useState([]);
  const [query, setQuery] = useState("");
  const [newPlant, setNewPlant] = useState({name: "", image: "", price: ""});

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => setPlantList(data.map(plant => {return {...plant, inStock: true}})));
  } ,[])

  function handleNewPlantSubmit(event) {
    event.preventDefault();
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: newPlant.name,
        image: newPlant.image,
        price: newPlant.price
      })
    })
    .then(response => response.json())
    .then(data => setPlantList([...plantList, data]))
  }

  const filteredPlantList = plantList; // COME BACK AND EDIT

  return (
    <main>
      <NewPlantForm newPlant={newPlant} setNewPlant={setNewPlant} handleNewPlantSubmit={handleNewPlantSubmit} />
      <Search />
      <PlantList plants={filteredPlantList} setPlants={setPlantList} url={url} />
    </main>
  );
}

export default PlantPage;
