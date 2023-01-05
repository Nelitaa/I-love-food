import Country11 from '../../assets/images/country-1-1.png';
import Country12 from '../../assets/images/country-1-2.png';
import Country13 from '../../assets/images/country-1-3.png';
import Country21 from '../../assets/images/country-2-1.png';
import Country22 from '../../assets/images/country-2-2.png';
import Country23 from '../../assets/images/country-2-3.png';

const initialState = {
  countries: [
    {
      id: 1,
      name: 'Argentina',
      image: Country11,
      views: 1000,
    },
    {
      id: 2,
      name: 'Brazil',
      image: Country12,
      views: 7000,
    },
    {
      id: 3,
      name: 'Chile',
      image: Country13,
      views: 2000,
    },
    {
      id: 4,
      name: 'Colombia',
      image: Country21,
      views: 3000,
    },
    {
      id: 5,
      name: 'Mexico',
      image: Country22,
      views: 4000,
    },
    {
      id: 6,
      name: 'Peru',
      image: Country23,
      views: 5000,
    },
  ],
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default countriesReducer;
