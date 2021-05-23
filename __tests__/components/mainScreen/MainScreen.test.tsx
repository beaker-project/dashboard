import React from 'react';
import { connectedRender, fireEvent } from '@tests/testUtils';
import MainScreen from '@components/mainScreen/MainScreen';

import { UserTypes } from '@ducks/user/types';

import { state } from '@mocks/user';

jest.mock('@components/landingPage/LandingPage', () => () =>
  'landing-page-mock'
);
jest.mock('@components/loginScreen/LoginScreen', () => () =>
  'login-screen-mock'
);
jest.mock('@components/pageNotFound/PageNotFound', () => () =>
  'page-not-found-mock'
);

const loadingState = {
  user: state.loadingState,
};

const loggedInState = {
  user: state.loggedInState,
};

describe('<MainScreen />', () => {
  test('should render the Login screen to non-logged user', async () => {
    const { result } = connectedRender(<MainScreen />, loadingState);
    expect(result.getByText('login-screen-mock')).toBeInTheDocument();
  });
  test('should render the proper components through navigation', async () => {
    const { result } = connectedRender(<MainScreen />, loggedInState);
    expect(result.getByText('landing-page-mock')).toBeInTheDocument();
    fireEvent.click(result.getByText('Start'));
    expect(result.getByText('landing-page-mock')).toBeInTheDocument();
  });
  test('should render the 404 for inexistent routes', async () => {
    const { result, history } = connectedRender(<MainScreen />, loggedInState);
    history.push('/inexistent-path');
    expect(result.getByText('page-not-found-mock')).toBeInTheDocument();
  });
  test('should render the Navigation Bar text', async () => {
    const { result } = connectedRender(<MainScreen />, loggedInState);
    const text = result.getByText('Start');
    expect(text).toBeInTheDocument();
  });
  test('should hide the Navigation Bar', async () => {
    const { result } = connectedRender(<MainScreen />, loggedInState);
    fireEvent.click(result.getByLabelText('Global navigation'));
    const sideBar = result.getByTestId('sidebar');
    expect(sideBar).toHaveClass('pf-m-collapsed');
    expect(sideBar).not.toHaveClass('pf-m-expanded');
  });
  test('fires logout action when the button is clicked', async () => {
    const { result, store } = connectedRender(<MainScreen />, loggedInState);
    fireEvent.click(result.getByText(loggedInState.user.data.username));
    fireEvent.click(result.getByText('Logout'));
    const actions = store.getActions();
    expect(
      actions.filter((action) => action.type === UserTypes.LOGOUT_REQUEST)
    ).toHaveLength(1);
  });
});
