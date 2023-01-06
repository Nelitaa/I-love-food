import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

test('renders Header component', () => {
  const { asFragment } = render(
    <Router>
      <Header />
    </Router>,
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders Header component', () => {
  const { getByText } = render(
    <Router>
      <Header />
    </Router>,
  );
  expect(getByText('I Love Food')).toBeInTheDocument();
});
