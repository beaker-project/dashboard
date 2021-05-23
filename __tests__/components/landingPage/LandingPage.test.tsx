import React from 'react';
import { render } from '@tests/testUtils';
import LandingPage from '@components/landingPage/LandingPage';

describe('<LandingPage />', () => {
  test('renders', async () => {
    const { getByText } = render(<LandingPage />);
    expect(getByText(/Welcome to Beaker Dashboard/)).toBeInTheDocument();
  });
});
