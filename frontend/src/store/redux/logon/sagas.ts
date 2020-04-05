import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { responseToLogon } from './actions';
import { CONSTANTE } from './_CONSTANTS';

import { IResposnse } from '../../../interfaces/api/IResponse';
import { IOng } from '../../../interfaces/models/IOng';

import { IAction } from '../../../interfaces/redux/logon';

function* requestToLogon({ payload }: IAction) {
  try {
    const { status, data: response }: IResposnse<IOng> = yield call(
      api.post,
      `/session`,
      payload.user
    );

    if (status === 201) {
      yield put(responseToLogon(true));

      const user = {
        email: response?.data.email,
        token: response?.data.token,
      };

      api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${response?.data.token}`;

      localStorage.setItem('@behero/user', JSON.stringify(user));
    }
  } catch (error) {
    toast.error('Email ou senhas não conferem.');
    yield put(responseToLogon(false));
  }
}

export default all([takeLatest(CONSTANTE.REQUEST_LOGON, requestToLogon)]);
