import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Country from './Country';
import store from '../redux/configureStore';

const country = {
  id: 1,
  name: 'Argentina',
  image: 'https://www.countryflags.io/ar/flat/64.png',
};

test('renders Country component', () => {
  const { getByText } = render(
    <Provider store={store}>
      <Router>
        <Country
          key={country.id}
          id={country.id}
          name={country.name}
          image={country.image}
        />
      </Router>
    </Provider>,
  );
  expect(getByText('Argentina')).toBeInTheDocument();
});
