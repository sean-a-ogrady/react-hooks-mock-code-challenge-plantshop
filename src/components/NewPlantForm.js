import React from "react";

function NewPlantForm({newPlant, setNewPlant, handleNewPlantSubmit}) {
  
  function handleFormChange(event) {
    const {name, value} = event.target;
    setNewPlant({...newPlant, [name]: value});
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlantSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={newPlant.name} onChange={handleFormChange} />
        <input type="text" name="image" placeholder="Image URL" value={newPlant.image} onChange={handleFormChange} />
        <input type="number" name="price" step="0.01" placeholder="Price" value={newPlant.price} onChange={handleFormChange} />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
