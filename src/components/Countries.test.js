import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Countries from './Countries';
import store from '../redux/configureStore';

describe('Countries', () => {
  it('renders Countries component', () => {
    render(
      <Provider store={store}>
        <Router>
          <Countries />
        </Router>
      </Provider>,
    );
    const listCountries = document.querySelector('.countries-container');
    expect(listCountries).toBeInTheDocument();
  });
});
