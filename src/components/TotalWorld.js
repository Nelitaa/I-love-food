import { useSelector } from 'react-redux';
import WorldMap from '../assets/images/world-map.png';
import Search from './Search';

const TotalWorld = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  const totalViews = recipes.reduce((total, country) => total + +country.id, 0);

  return (
    <section className="total-world">
      <img className="world-map-img" src={WorldMap} alt="world map" />
      <div className="total-world-container-text">
        <p className="country-text">
          Treat your taste buds to a flavorful trip with our recipes for cuisines
          from around the world!
        </p>
        <p className="text-views">
          <span className="recipe-views">{totalViews}</span>
          views
        </p>
        <Search />
      </div>
    </section>
  );
};

export default TotalWorld;
