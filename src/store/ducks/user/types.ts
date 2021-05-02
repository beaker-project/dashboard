// Action Types
export enum UserTypes {
  LOGIN_REQUEST = '@user/LOGIN_REQUEST',
  LOGOUT_REQUEST = '@user/LOGOUT_REQUEST',
  LOGIN_SUCCESS = '@user/LOGIN_SUCCESS',
  LOGIN_FAILURE = '@user/LOGIN_FAILURE',
}

// Data Types - Returned by the API
export interface LoginRequestData {
  username: string;
  password: string;
}

export interface LoginResponseData {
  username: string;
}

//  State Type

export interface User {
  username: string;
  isLoggedIn: boolean;
}

export interface UserState {
  readonly data: User;
  readonly loading: boolean;
  readonly error: boolean;
}
