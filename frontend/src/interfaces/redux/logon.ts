export interface IAction {
  type: string;
  payload: {
    user: object;
    auth: boolean;
  };
}

export interface IInicialState {
  email: string;
  token: string;
  auth: any;
}

export interface IState {
  logon: IInicialState;
}
