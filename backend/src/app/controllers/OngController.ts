import { Request, Response } from 'express';
import { SignJwt } from '../utils/SignJwt';
import { Ong } from '../models/ong';

export abstract class OngController {
  public static async show(_: Request, response: Response) {
    const { ongId } = response.locals;

    const ong = await Ong.findOne({
      relations: ['incidents'],
      where: { id: ongId },
      select: ['id', 'email', 'name', 'city', 'uf', 'createdAt'],
    });

    delete ong?.id;

    return response.status(200).json({ message: 'success', data: ong });
  }

  public static async store(request: Request, response: Response) {
    const {
      name,
      email,
      password,
      confirmPassword,
      whatsapp,
      city,
      uf,
    } = request.body;

    if (String(password) !== String(confirmPassword)) {
      return response
        .status(400)
        .json({ message: 'Passwords não conferem.', data: {} });
    }

    const ong = new Ong();

    ong.name = String(name);
    ong.email = String(email);
    ong.password = String(password);
    ong.whatsapp = String(whatsapp);
    ong.city = String(city);
    ong.uf = String(uf);

    try {
      const newOng = await Ong.create(ong).save();

      const token = new SignJwt(newOng.id).jwt();

      delete newOng.password;
      delete newOng.id;

      return response
        .status(201)
        .json({ message: 'success', data: { ...newOng, token } });
    } catch (error) {
      return response.status(400).json({ message: String(error), data: {} });
    }
  }
}
