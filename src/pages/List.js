import TotalCountry from '../components/TotalCountry';
import Recipes from '../components/Recipes';

const List = () => (
  <div>
    <TotalCountry />
    <div className="recipes-country">RECIPE LIST</div>
    <Recipes />
  </div>
);

export default List;
