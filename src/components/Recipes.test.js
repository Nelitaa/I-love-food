import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Recipes from './Recipes';
import store from '../redux/configureStore';

const countrySelected = {
  id: 1,
  name: 'Argentina',
  image: 'https://restcountries.eu/data/arg.svg',
};

describe('Recipes', () => {
  test('renders Recipes component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Recipes countrySelected={countrySelected} />
        </Router>
      </Provider>,
    );
    expect(document.querySelector('.list-recipes')).toBeInTheDocument();
  });
});
