import TotalWorld from '../components/TotalWorld';
import Countries from '../components/Countries';

const Home = () => (
  <div>
    <TotalWorld />
    <div className="recipes-country">RECIPES BY COUNTRY</div>
    <Countries />
  </div>
);

export default Home;
