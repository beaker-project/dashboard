import { Reducer } from 'redux';
import { UserState, UserTypes } from './types';

export const INITIAL_STATE: UserState = {
  data: {
    isLoggedIn: false,
    username: '',
  },
  loading: false,
  error: false,
};

const reducer: Reducer<UserState> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.LOGIN_REQUEST:
      return { ...state, loading: true };
    case UserTypes.LOGOUT_REQUEST:
      return INITIAL_STATE;
    case UserTypes.LOGIN_SUCCESS:
      return {
        loading: false,
        error: false,
        data: { isLoggedIn: true, username: action.payload.username },
      };
    case UserTypes.LOGIN_FAILURE:
      return { ...INITIAL_STATE, error: true };
    default:
      return state;
  }
};

export default reducer;
