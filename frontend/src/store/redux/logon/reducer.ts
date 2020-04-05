import { CONSTANTE } from './_CONSTANTS';
import { IAction } from '../../../interfaces/redux/redux';
import { IInicialState } from '../../../interfaces/redux/logon';

export const logon = (
  state = {
    auth: false,
    email: '',
    token: '',
    loading: false,
  } as IInicialState,
  action: IAction<IInicialState>
) => {
  switch (action.type) {
    case CONSTANTE.RESPONSE_LOGON:
      return { ...action.payload };

    case CONSTANTE.REQUEST_LOGOUT:
      localStorage.removeItem('@behero/token');
      return { auth: false, email: '', token: '', loading: false };

    case CONSTANTE.LOADING_TO_REQUEST:
      return { ...state, loading: action.payload.loading };

    default:
      return state;
  }
};
