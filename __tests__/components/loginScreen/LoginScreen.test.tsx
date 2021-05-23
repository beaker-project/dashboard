import React from 'react';
import userEvent from '@testing-library/user-event';
import { connectedRender } from '@tests/testUtils';
import LoginScreen from '@components/loginScreen/LoginScreen';

import { INITIAL_STATE } from '@ducks/user';
import { UserTypes } from '@ducks/user/types';
import { state } from '@mocks/user';

const errorState = {
  user: state.errorState,
};

const initialState = {
  user: INITIAL_STATE,
};

describe('<PageNotFound />', () => {
  test('renders for login', async () => {
    const { result } = connectedRender(<LoginScreen />, initialState);
    expect(result.getByText('Log in to Beaker')).toBeInTheDocument();
  });
  test('fires login action when button is clicked', async () => {
    const { result, store } = connectedRender(<LoginScreen />, initialState);
    // Paste instead of type so the whole input goes to the box.
    // Type has some bug with the input selection here, which needs to
    // be investigated
    userEvent.paste(result.getByLabelText(/Username/), 'testUsername');
    userEvent.paste(result.getByLabelText(/Password/), 'testPassword');
    userEvent.click(result.getByText('Log In'));
    const actions = store.getActions();
    expect(
      actions.filter(
        (action) =>
          action.type === UserTypes.LOGIN_REQUEST &&
          action.payload.username === 'testUsername' &&
          action.payload.password === 'testPassword'
      )
    ).toHaveLength(1);
  });
  test('displays help text for failed login', async () => {
    const { result } = connectedRender(<LoginScreen />, errorState);
    expect(result.getByText('Invalid log in Credentials')).toBeInTheDocument();
  });
});
