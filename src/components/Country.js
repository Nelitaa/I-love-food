import PropTypes from 'prop-types';
import ShowIcon from '../assets/images/ShowIcon.png';

const Country = (props) => {
  const { idCountry, NameCountry, ImageCountry } = props;
  return (
    <li className="country-container" key={idCountry}>
      <button type="button" className="show-icon"><img src={ShowIcon} alt="Show icon" /></button>
      <img src={ImageCountry} alt="Country" />
      <h2 className="country-text">{NameCountry}</h2>
      <p className="text-views">954</p>
    </li>
  );
};

export default Country;

Country.propTypes = {
  idCountry: PropTypes.number.isRequired,
  NameCountry: PropTypes.string.isRequired,
  ImageCountry: PropTypes.string.isRequired,
};
