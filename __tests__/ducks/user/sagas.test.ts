/* eslint-disable @typescript-eslint/camelcase */
import { expectSaga } from 'redux-saga-test-plan';
import { throwError } from 'redux-saga-test-plan/providers';
import * as matchers from 'redux-saga-test-plan/matchers';
import api from '@services/api';

import rootSaga from '@ducks/rootSaga';
import * as actions from '@ducks/user/actions';

import * as mocks from '@mocks/user';

describe('user saga', () => {
  test('handles successful login', () => {
    const apiResponse = {
      data: mocks.loginSuccessMock,
    };
    return expectSaga(rootSaga)
      .dispatch(actions.loginRequest(mocks.loginRequestMock))
      .provide([[matchers.call.fn(api.post), apiResponse]])
      .put(actions.loginSuccess(mocks.loginSuccessMock))
      .silentRun();
  });

  test('handles login error', () => {
    return expectSaga(rootSaga)
      .dispatch(actions.loginRequest(mocks.loginRequestMock))
      .provide([[matchers.call.fn(api.post), throwError(new Error('error'))]])
      .put(actions.loginFailure())
      .silentRun();
  });

  // not so much to test here
  test('handles logout', () => {
    return expectSaga(rootSaga)
      .dispatch(actions.logoutRequest())
      .provide([[matchers.call.fn(api.post), {}]])
      .silentRun();
  });
});
