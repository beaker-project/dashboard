import React from 'react';
import { connectedRender } from '../../testUtils';
import PageNotFound from '../../../src/components/pageNotFound/PageNotFound';

describe('<PageNotFound />', () => {
  test('renders', async () => {
    const { result } = connectedRender(<PageNotFound />, {}, '/cow-level');
    expect(
      result.getByText(/The path \/cow-level does not exist/)
    ).toBeInTheDocument();
  });
});
