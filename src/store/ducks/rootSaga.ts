import { all, takeLatest } from 'redux-saga/effects';

import load from './localtime/sagas';
import { LocaltimeTypes } from './localtime/types';
import userSagas from './user/sagas';

export default function* rootSaga(): Generator {
  return yield all([
    takeLatest(LocaltimeTypes.LOAD_REQUEST, load),
    ...userSagas,
  ]);
}
