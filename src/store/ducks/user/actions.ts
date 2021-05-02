import { action } from 'typesafe-actions';
import { LoginRequestData, LoginResponseData, UserTypes } from './types';

export const loginRequest = (payload: LoginRequestData) =>
  action(UserTypes.LOGIN_REQUEST, payload);
export const logoutRequest = () => action(UserTypes.LOGOUT_REQUEST);
export const loginSuccess = (payload: LoginResponseData) =>
  action(UserTypes.LOGIN_SUCCESS, payload);
export const loginFailure = () => action(UserTypes.LOGIN_FAILURE);
