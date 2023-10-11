import React from "react";
import Header from "./Header";
import PlantPage from "./PlantPage";

/*
DELIVERABLES
------------
- [ ] Load in all plants when app starts (GET)
- [ ] Implement form to add new plants (POST)
- [ ] Mark plant as "sold out" 
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