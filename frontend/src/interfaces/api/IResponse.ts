export interface IResposnse<T> {
  status: number;
  data?: {
    data: T;
    message: string;
  };
}
