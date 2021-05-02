import { AnyAction } from 'redux';
import { call, put, takeLatest } from 'redux-saga/effects';

import api from '../../../services/api';
import * as actions from './actions';
import { LoginResponseData, UserTypes } from './types';

function* login(action: AnyAction) {
  try {
    const { username, password } = action.payload;
    const response: { data: LoginResponseData } = yield call(
      api.post,
      '/auth/login',
      {},
      {
        auth: {
          username,
          password,
        },
      }
    );
    yield put(actions.loginSuccess(response.data));
  } catch (err) {
    yield put(actions.loginFailure());
  }
}

function* logout() {
  try {
    yield call(api.post, '/auth/logout');
  } catch (err) {
    // Nothing really to do on logout error
    window.console.log(err);
  }
}

const userSagas = [
  takeLatest(UserTypes.LOGIN_REQUEST, login),
  takeLatest(UserTypes.LOGOUT_REQUEST, logout),
];
export default userSagas;
