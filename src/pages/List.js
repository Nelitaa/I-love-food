import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TotalCountry from '../components/TotalCountry';
import Recipes from '../components/Recipes';

const List = () => {
  const { id } = useParams();
  const [countrySelected, setCountrySelected] = useState(+id);
  const countries = useSelector((state) => state.countries.countries);

  useEffect(() => {
    setCountrySelected(countries.find((country) => country.id === +id));
  }, [countries, id]);

  return (
    <div>
      <TotalCountry countrySelected={countrySelected} />
      <div className="recipes-country">RECIPE LIST</div>
      <Recipes />
    </div>
  );
};

export default List;
