import { configureStore } from '@reduxjs/toolkit';
import countriesReducer from './countries/countries';
import recipesReducer from './recipes/recipes';

const store = configureStore({
  reducer: {
    recipes: recipesReducer,
    countries: countriesReducer,
  },
});

export default store;
