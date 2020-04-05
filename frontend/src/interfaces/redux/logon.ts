export interface ILogon {
  email: string;
  password: string;
}

export interface IInicialState {
  email: string;
  token: string;
  auth: boolean;
  loading: boolean;
}

export interface IState {
  logon: IInicialState;
}
