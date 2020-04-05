import { CONSTANTE } from './_CONSTANTS';
import { IAction, IInicialState } from '../../../interfaces/redux/logon';

export const logon = (
  state = { auth: null, email: '', token: '' } as IInicialState,
  action: IAction
): IInicialState => {
  switch (action.type) {
    case CONSTANTE.RESPONSE_LOGON:
      const newState = {
        ...state,
        auth: action.payload.auth,
      };
      return newState;

    default:
      return state;
  }
};
