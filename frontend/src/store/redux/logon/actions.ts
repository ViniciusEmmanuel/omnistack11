import { CONSTANTE } from './_CONSTANTS';
interface ILogon {
  email: string;
  password: string;
}

export function requestToLogin(user: ILogon) {
  return {
    type: CONSTANTE.REQUEST_LOGON,
    payload: {
      user,
    },
  };
}

export function responseToLogon(status = false) {
  return {
    type: CONSTANTE.RESPONSE_LOGON,
    payload: {
      auth: status,
    },
  };
}
