import Country from './Country';
import Country11 from '../assets/images/country-1-1.png';
import Country12 from '../assets/images/country-1-2.png';
import Country13 from '../assets/images/country-1-3.png';
import Country21 from '../assets/images/country-2-1.png';
import Country22 from '../assets/images/country-2-2.png';

const Countries = () => (
  <ul className="countries-container">
    <Country
      idCountry={1}
      NameCountry="Argentina"
      ImageCountry={Country11}
    />
    <Country
      idCountry={2}
      NameCountry="Bolivia"
      ImageCountry={Country12}
    />
    <Country
      idCountry={3}
      NameCountry="Brazil"
      ImageCountry={Country13}
    />
    <Country
      idCountry={4}
      NameCountry="Chile"
      ImageCountry={Country21}
    />
    <Country
      idCountry={5}
      NameCountry="Colombia"
      ImageCountry={Country22}
    />
  </ul>
);

export default Countries;
