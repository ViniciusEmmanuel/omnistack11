import { CONSTANTE } from './_CONSTANTS';
import { IAction } from '../../../interfaces/redux/redux';
import { IInicialState } from '../../../interfaces/redux/logon';

export const logon = (
  state = { auth: null, email: '', token: '' } as IInicialState,
  action: IAction<IInicialState>
) => {
  switch (action.type) {
    case CONSTANTE.RESPONSE_LOGON:
      return { ...action.payload };

    case CONSTANTE.REQUEST_LOGOUT:
      localStorage.removeItem('@behero/token');
      return { auth: null, email: '', token: '' };

    default:
      return state;
  }
};
