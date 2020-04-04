import { Request, Response } from 'express';
import { SignJwt } from '../utils/SignJwt';
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

    const token = new SignJwt(ong.id).jwt();

    return response
      .status(201)
      .json({ message: 'success', data: { email, token } });
  }
}
