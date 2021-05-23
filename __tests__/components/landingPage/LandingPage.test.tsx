import React from 'react';
import { render } from '../../testUtils';
import LandingPage from '../../../src/components/landingPage/LandingPage';

describe('<LandingPage />', () => {
  test('renders', async () => {
    const { getByText } = render(<LandingPage />);
    expect(getByText(/Welcome to Beaker Dashboard/)).toBeInTheDocument();
  });
});
