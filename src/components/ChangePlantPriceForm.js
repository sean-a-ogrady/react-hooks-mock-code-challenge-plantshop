import React from "react";

export default function ChangePlantPriceForm({ name, price, newPrice, setNewPrice, handlePriceChangeSubmit, deletePlant }) {
  return (
    <div>
      <form onSubmit={handlePriceChangeSubmit} >
        <h2>Change Price of {name}</h2>
        <h3>Current Price: {price}</h3>
        <input type="number" placeholder="New Price" value={newPrice} onChange={event => parseInt(event.target.value) < 0 ? null : setNewPrice(event.target.value)} />
        <button type="submit">Change Price</button>
        <button onClick={deletePlant} >DELETE PLANT</button>
      </form>
    </div>
  )
}