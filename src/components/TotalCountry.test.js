import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import TotalCountry from './TotalCountry';
import store from '../redux/configureStore';

const countrySelected = {
  id: 1,
  name: 'Argentina',
  image: 'https://www.countryflags.io/ar/flat/64.png',
};

test('renders TotalCountry component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <TotalCountry countrySelected={countrySelected} />
      </Router>
    </Provider>,
  );
  expect(getByText('Argentina')).toBeInTheDocument();
});
