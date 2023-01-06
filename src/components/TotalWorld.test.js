import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import TotalWorld from './TotalWorld';
import store from '../redux/configureStore';

describe('TotalWorld', () => {
  it('renders TotalWorld component', () => {
    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <TotalWorld />
        </Router>
      </Provider>,
    );
    expect(getByText('views')).toBeInTheDocument();
  });
});
