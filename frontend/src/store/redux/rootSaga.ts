import { all } from 'redux-saga/effects';

import logon from './logon/saga';

export default function* rootSaga() {
  return yield all([logon]);
}
