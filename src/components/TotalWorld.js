import WorldMap from '../assets/images/world-map.png';

const TotalWorld = () => (
  <section className="total-world">
    <img className="world-map-img" src={WorldMap} alt="world map" />
    <div className="total-world-container-text">
      <p className="total-world-text">
        Treat your taste buds to a flavorful trip with our recipes for cuisines
        from around the world!
      </p>
      <p className="total-world-views">6,958 views</p>
    </div>
  </section>
);

export default TotalWorld;
