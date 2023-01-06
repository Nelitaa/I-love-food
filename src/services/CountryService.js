import http from '../http-common';

const getAll = () => http.get('/json/v1/1/list.php?a=list');

const CountryService = {
  getAll,
};

export default CountryService;
