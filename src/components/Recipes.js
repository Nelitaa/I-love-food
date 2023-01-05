import ShowIcon from '../assets/images/ShowIcon.png';

const Recipes = () => {
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
  );
};

export default Recipes;
