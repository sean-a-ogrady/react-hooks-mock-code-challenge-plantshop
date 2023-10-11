import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

/*
DELIVERABLES
------------
- [x] Load in all plants when app starts (GET)
- [x] Implement form to add new plants (POST)
- [x] Mark plant as "sold out" 
- [ ] Search for plants by name, filter list
ADVANCED
--------
- [ ] Update the price of a plant (PATCH)
- [ ] Delete a plant (DELETE)
*/

function App() {
  return (
    <div className="app">
      <Header />
      <PlantPage />
    </div>
  );
}

export default App;