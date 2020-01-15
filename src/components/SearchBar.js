import React from 'react';

const SearchBar = (props) => {
  return (
    <div>

      <strong>Sort by:</strong>
      <label>
        <input type="radio" name="Alphabetically" value="Alphabetically" checked={null} onChange={(e) => props.sortStocks(e.target.name)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" name="Price" value="Price" checked={null} onChange={(e) => props.sortStocks(e.target.name)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => props.filterStock(e.target.value)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
