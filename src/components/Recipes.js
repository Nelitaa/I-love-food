import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import ShowIcon from '../assets/images/ShowIcon.png';

const Recipes = ({ countrySelected }) => {
  const recipes = useSelector((state) => state.recipes.recipes);

  return (
    <ul className="list-recipes">
      {recipes.map((recipe) => {
        if (recipe.area === countrySelected.name) {
          return (
            <li className="recipe-container" key={recipe.id}>
              <h2 className="country-text">{recipe.name}</h2>
              <div className="recipe-list-container-views">
                <p className="text-views">
                  <span className="recipe-views">{recipe.id}</span>
                  views
                </p>
                <button type="button" className="show-icon"><img src={ShowIcon} alt="Show icon" /></button>
              </div>
            </li>
          );
        }
        return null;
      })}
    </ul>
  );
};

export default Recipes;

Recipes.propTypes = {
  countrySelected: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  }).isRequired,
};
