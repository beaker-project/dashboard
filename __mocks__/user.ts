import { INITIAL_STATE } from '@ducks/user';

export const loginRequestMock = {
  username: 'test',
  password: 'test',
};

export const loginSuccessMock = {
  username: 'test',
};

export const state = {
  loadingState: { ...INITIAL_STATE, loading: true },
  errorState: { ...INITIAL_STATE, error: true },
  loggedInState: {
    ...INITIAL_STATE,
    data: {
      isLoggedIn: true,
      username: 'test',
    },
  },
};
