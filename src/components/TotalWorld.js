import { useSelector } from 'react-redux';
import WorldMap from '../assets/images/world-map.png';

const TotalWorld = () => {
  const countries = useSelector((state) => state.countries.countries);
  const totalViews = countries.reduce((total, country) => total + country.id, 0);

  return (
    <section className="total-world">
      <img className="world-map-img" src={WorldMap} alt="world map" />
      <div className="total-world-container-text">
        <p className="country-text">
          Treat your taste buds to a flavorful trip with our recipes for cuisines
          from around the world!
        </p>
        <p className="text-views">
          <span>{totalViews}</span>
          views
        </p>
      </div>
    </section>
  );
};

export default TotalWorld;
