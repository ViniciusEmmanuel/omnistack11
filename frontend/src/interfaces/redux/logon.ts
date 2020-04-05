export interface ILogon {
  email: string;
  password: string;
}

export interface IInicialState {
  email: string;
  token: string;
  auth: any;
}

export interface IState {
  logon: IInicialState;
}
