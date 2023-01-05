import React from 'react';
import { useSelector } from 'react-redux';
import ShowIcon from '../assets/images/ShowIcon.png';

const Recipes = () => {
  const recipes = useSelector((state) => state.recipes.recipes);

  return (
    <ul className="list-recipes">
      {recipes.map((recipe) => (
        <li className="recipe-container" key={recipe.id}>
          <h2 className="country-text">{recipe.name}</h2>
          <div className="recipe-list-container-views">
            <p className="text-views">
              <span className="recipe-views">{recipe.view}</span>
              views
            </p>
            <button type="button" className="show-icon"><img src={ShowIcon} alt="Show icon" /></button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default Recipes;
