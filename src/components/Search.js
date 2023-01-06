/* eslint-disable */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchIcon from '../assets/images/search-line.png';
import { searchCountry } from '../redux/countries/countries';

function Search() {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries.countries);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let searchCountries = [];
    const country = countries.find((country) => country.name === search);
    searchCountries.push(country);
    if (country) {
      dispatch(searchCountry(searchCountries));
    } else {
      alert('Country not found');
      setSearch('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search by country"
        value={search}
        onChange={handleChange}
      />
      <button type="submit" className="navigation-icons">
        <img src={SearchIcon} alt="Search icon" />
      </button>
    </form>
  );
}

export default Search;
