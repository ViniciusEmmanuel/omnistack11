import { Request, Response } from 'express';
import { sign } from 'jsonwebtoken';
import { ConfigJwt } from '../config/jwt';

import { Ong } from '../models/ong';

export abstract class SessionController {
  public static async store(resquest: Request, response: Response) {
    const { email, password } = resquest.body;

    const ong = await Ong.findOneOrFail({ where: { email } });

    if (!ong) {
      return response
        .status(400)
        .json({ message: 'Email ou password não é valido.', data: {} });
    }

    if (!(await ong.comparePassword(password))) {
      return response
        .status(400)
        .json({ message: 'Email ou password não é valido.', data: {} });
    }

    const token = sign({ id: ong.id }, ConfigJwt.secret, {
      expiresIn: ConfigJwt.expiresIn,
    });

    return response.status(201).json({ token });
  }
}
