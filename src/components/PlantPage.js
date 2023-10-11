import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
import ChangePlantPriceForm from "./ChangePlantPriceForm";

function PlantPage() {
  const url = " http://localhost:6001/plants/";

  const [plantList, setPlantList] = useState([]);
  const [query, setQuery] = useState("");
  const [newPlant, setNewPlant] = useState({ name: "", image: "", price: "" });
  const [selectedPlant, setSelectedPlant] = useState({});
  const [newPrice, setNewPrice] = useState("");
  const [showPriceChangeForm, setShowPriceChangeForm] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setPlantList(data.map(plant => { return { ...plant, inStock: true } })));
  }, [])

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

  function handlePriceChangeSubmit(event) {
    event.preventDefault();
    fetch(url + selectedPlant.id, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: newPrice
      })
    })
      .then(response => response.json())
      .then(data => setPlantList(plants => plants.map(plant => plant.id === data.id ? { ...plant, price: data.price } : plant)))
  }

  const filteredPlantList = plantList.filter(plant =>
    query.toLowerCase().split(" ").every(term =>
      plant.name.toLowerCase().split(" ").some(word =>
        word.startsWith(term)
      )
    )
  )

  return (
    <main>
      <NewPlantForm
        newPlant={newPlant}
        setNewPlant={setNewPlant}
        handleNewPlantSubmit={handleNewPlantSubmit} />
      {showPriceChangeForm ? <ChangePlantPriceForm
        name={selectedPlant.name}
        price={selectedPlant.price}
        newPrice={newPrice}
        setNewPrice={setNewPrice}
        handlePriceChangeSubmit={handlePriceChangeSubmit} /> : null}
      <Search query={query} setQuery={setQuery} />
      <PlantList
        plants={filteredPlantList}
        setPlants={setPlantList}
        url={url}
        selectedPlant={selectedPlant}
        setSelectedPlant={setSelectedPlant}
        setShowPriceChangeForm={setShowPriceChangeForm}
      />
    </main>
  );
}

export default PlantPage;
