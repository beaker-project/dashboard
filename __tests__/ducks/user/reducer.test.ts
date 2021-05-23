/* eslint-disable @typescript-eslint/camelcase */
import reducer, { INITIAL_STATE } from '@ducks/user';
import * as actions from '@ducks/user/actions';

import * as mocks from '@mocks/user';

describe('user reducer', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, { type: 'stub' })).toEqual(INITIAL_STATE);
  });

  test('handles login request', () => {
    expect(
      reducer(INITIAL_STATE, actions.loginRequest(mocks.loginRequestMock))
    ).toEqual(mocks.state.loadingState);
  });
  test('handles login success', () => {
    expect(
      reducer(
        mocks.state.loadingState,
        actions.loginSuccess(mocks.loginSuccessMock)
      )
    ).toEqual(mocks.state.loggedInState);
  });
  test('handles login failure', () => {
    expect(reducer(mocks.state.loadingState, actions.loginFailure())).toEqual(
      mocks.state.errorState
    );
  });
  test('handles logout request', () => {
    expect(reducer(mocks.state.loggedInState, actions.logoutRequest())).toEqual(
      INITIAL_STATE
    );
  });
});
