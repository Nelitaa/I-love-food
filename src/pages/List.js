import React from 'react';
import Country11 from '../assets/images/country-1-1.png';
import ShowIcon from '../assets/images/ShowIcon.png';

const List = () => {
  const recipes = [
    {
      id: 1,
      name: 'Tortilla de papas',
      views: 100,
    },
    {
      id: 2,
      name: 'Milanesa a la napolitana',
      views: 200,
    },
    {
      id: 3,
      name: 'Asado',
      views: 300,
    },
    {
      id: 4,
      name: 'Empanadas',
      views: 400,
    },
    {
      id: 5,
      name: 'Pizza',
      views: 500,
    },
    {
      id: 6,
      name: 'Ensalada César',
      views: 600,
    },
  ];

  return (
    <div>
      <section className="total-country">
        <img className="world-map-img" src={Country11} alt="Country" />
        <div className="total-world-container-text">
          <h2 className="name-country">Argentina</h2>
          <p className="text-views">954</p>
        </div>
      </section>
      <div className="recipes-country">RECIPE LIST</div>
      <ul className="list-recipes">
        {recipes.map((recipe) => (
          <li className="recipe-container" key={recipe.id}>
            <h2 className="country-text">{recipe.name}</h2>
            <div className="recipe-list-container-views">
              <p className="text-views">
                <span className="recipe-views">{recipe.views}</span>
                views
              </p>
              <button type="button" className="show-icon"><img src={ShowIcon} alt="Show icon" /></button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
