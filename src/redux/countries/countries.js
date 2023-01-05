import { createAsyncThunk } from '@reduxjs/toolkit';
import CountryService from '../../services/CountryService';
import Country11 from '../../assets/images/country-1-1.png';
import Country12 from '../../assets/images/country-1-2.png';
import Country13 from '../../assets/images/country-1-3.png';
import Country21 from '../../assets/images/country-2-1.png';
import Country22 from '../../assets/images/country-2-2.png';
import Country23 from '../../assets/images/country-2-3.png';

const initialState = {
  countries: [
    { id: 1433, image: Country11, name: 'name' }, { id: 2346, image: Country12, name: 'name' }, { id: 3789, image: Country13, name: 'name' },
    { id: 434, image: Country21, name: 'name' }, { id: 587, image: Country22, name: 'name' }, { id: 623, image: Country23, name: 'name' },
    { id: 346, image: Country12, name: 'name' }, { id: 13, image: Country11, name: 'name' }, { id: 44, image: Country21, name: 'name' },
    { id: 63, image: Country23, name: 'name' }, { id: 6666, image: Country12, name: 'name' }, { id: 53, image: Country11, name: 'name' },
    { id: 23462, image: Country22, name: 'name' }, { id: 3590, image: Country13, name: 'name' }, { id: 4532, image: Country23, name: 'name' },
    { id: 5871, image: Country22, name: 'name' }, { id: 7, image: Country22, name: 'name' }, { id: 999, image: Country13, name: 'name' },
    { id: 143, image: Country12, name: 'name' }, { id: 34, image: Country21, name: 'name' }, { id: 111, image: Country11, name: 'name' },
    { id: 113, image: Country23, name: 'name' }, { id: 904, image: Country13, name: 'name' }, { id: 56, image: Country11, name: 'name' },
    { id: 35, image: Country22, name: 'name' }, { id: 78, image: Country13, name: 'name' },
  ],
};

export const fetchCountries = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const response = await CountryService.getAll();
    return response.data.meals;
  },
);

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'countries/fetchCountries/fulfilled':
      return {
        ...state,
        countries: state.countries.map((country, index) => ({
          ...country,
          name: action.payload[index].strArea,
        })),
      };
    default:
      return state;
  }
};

export default countriesReducer;
