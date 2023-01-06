import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const TotalCountry = ({ countrySelected }) => {
  const recipes = useSelector((state) => state.recipes.recipes);
  let totalCountryViews = 0;
  recipes.forEach((recipe) => {
    if (recipe.area === countrySelected.name) {
      totalCountryViews += +recipe.id;
    }
  });

  return (
    <section className={countrySelected.id % 2 === 0 ? 'total-country' : 'total-country-second-background'}>
      <img className="world-map-img" src={countrySelected.image} alt="World Map" />
      <div className="total-world-container-text">
        <h2 className="name-country">{countrySelected.name}</h2>
        <p className="text-views">{totalCountryViews}</p>
      </div>
    </section>
  );
};

export default TotalCountry;

TotalCountry.propTypes = {
  countrySelected: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
};
