import { createAsyncThunk } from '@reduxjs/toolkit';
import RecipeService from '../../services/RecipeService';

const initialState = {
  recipes: [],
};

export const fetchRecipes = createAsyncThunk(
  'recipes/fetchRecipes',
  async () => {
    const response = await RecipeService.getAll();
    const listRecipes = response.data.meals.map((recipe) => ({
      id: recipe.idMeal,
      name: recipe.strMeal,
      area: recipe.strArea,
    }));
    return listRecipes;
  },
);

const recipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetchRecipes.fulfilled.type:
      return {
        ...state,
        recipes: action.payload,
      };
    default:
      return state;
  }
};

export default recipesReducer;
