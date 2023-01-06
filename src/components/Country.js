import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ShowIcon from '../assets/images/ShowIcon.png';

const Country = (props) => {
  const {
    id, name, image,
  } = props;

  return (
    <li className="country-container">
      <Link to={`/list/${id}`}>
        <button type="button" className="show-icon">
          <img src={ShowIcon} alt="Show Icon" />
        </button>
      </Link>
      <img src={image} alt="Country" />
      <h2 className="country-text">{name}</h2>
      <p className="text-views">{id}</p>
    </li>
  );
};

export default Country;

Country.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};
