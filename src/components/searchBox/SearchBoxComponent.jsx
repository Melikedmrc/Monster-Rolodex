import React from 'react';
import './SearchBoxStyles.css'; 

function SearchBoxComponent({onInputChange}) {

  return (
    <div>
      <input
        type="search"
        className="search-box"
        placeholder="search monsters"
        onChange={onInputChange}
      />
    </div>
  );
}

export default SearchBoxComponent;
