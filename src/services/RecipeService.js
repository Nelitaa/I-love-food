import http from '../http-common';

const getAll = () => http.get('/json/v1/1/search.php?s=');

const RecipeService = {
  getAll,
};

export default RecipeService;
