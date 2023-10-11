import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const url = " http://localhost:6001/plants/";

  const [plantList, setPlantList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(setPlantList);
  } ,[])

  const filteredPlantList = plantList; // COME BACK AND EDIT

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={filteredPlantList} />
    </main>
  );
}

export default PlantPage;
