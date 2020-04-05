import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import { responseToLogon } from './actions';
import { CONSTANTE } from './_CONSTANTS';

import { IResposnse } from '../../../interfaces/api/IResponse';
import { IOng } from '../../../interfaces/models/IOng';

import { IAction } from '../../../interfaces/redux/redux';

interface IRequestToLogon {
  user: {
    email: string;
    password: string;
  };
}

function* requestToLogon({ payload }: IAction<IRequestToLogon>) {
  try {
    const { status, data: response }: IResposnse<IOng> = yield call(
      api.post,
      `/session`,
      payload.user
    );

    if (status === 201) {
      localStorage.setItem(
        '@behero/token',
        JSON.stringify(response.data.token)
      );
      yield put(
        responseToLogon({
          auth: true,
          email: response.data.email,
          token: response.data.token,
        })
      );
    }
  } catch (error) {
    toast.error('Email ou senhas não conferem.');
    yield put(responseToLogon({ auth: false, email: '', token: '' }));
  }
}

export default all([takeLatest(CONSTANTE.REQUEST_LOGON, requestToLogon)]);
