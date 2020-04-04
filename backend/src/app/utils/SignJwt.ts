import { sign } from 'jsonwebtoken';
import { ConfigJwt } from '../config/jwt';

export class SignJwt {
  constructor(private idUser: string) {
    this.idUser = idUser;
  }

  public jwt(): string {
    if (!ConfigJwt.secret) {
      return '';
    }

    const token = sign({ id: this.idUser }, ConfigJwt.secret, {
      expiresIn: ConfigJwt.expiresIn,
    });

    return token;
  }
}
