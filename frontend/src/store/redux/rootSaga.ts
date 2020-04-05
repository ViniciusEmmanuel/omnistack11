import { all } from 'redux-saga/effects';

import logon from './logon/sagas';

export default function* rootSaga() {
  return yield all([logon]);
}
