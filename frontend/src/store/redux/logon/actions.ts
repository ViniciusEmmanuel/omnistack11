import { CONSTANTE } from './_CONSTANTS';
import { ILogon, IInicialState } from '../../../interfaces/redux/logon';

export function requestToLogin(user: ILogon) {
  return {
    type: CONSTANTE.REQUEST_LOGON,
    payload: user,
  };
}

export function responseToLogon(payload: IInicialState) {
  return {
    type: CONSTANTE.RESPONSE_LOGON,
    payload,
  };
}

export function requestToLogout() {
  return {
    type: CONSTANTE.REQUEST_LOGOUT,
    payload: {},
  };
}

export function loadingToLogon(loading: boolean) {
  return {
    type: CONSTANTE.LOADING_TO_REQUEST,
    payload: { loading },
  };
}
