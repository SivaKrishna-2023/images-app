import React from 'react';
import './index.css'

function SearchBar({ query, setQuery, onSearch }) {
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <div className="icon-container">
      <img src='https://res.cloudinary.com/dy5xxxedo/image/upload/v1711084795/sunrise_vprm23.png' alt="icon" className='icon-image'/>
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Search for images..."
        className='search-input'
      />
      <button type="search" className='search-button'>Search</button>
    </form>
    </div>
  );
}

export default SearchBar;