export interface IResposnse<T> {
  status: number;
  message: string;
  data?: T;
}
