import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const Countries = () => {
  const countries = useSelector((state) => state.countries.countries);

  return (
    <ul className="countries-container">
      {countries.map((country) => (
        <Country
          key={country.id}
          id={country.id}
          name={country.name}
          image={country.image}
        />
      ))}
    </ul>
  );
};

export default Countries;
