import { Request, Response } from 'express';
import { Ong } from '../models/ong';

export abstract class OngController {
  public static async index(_: Request, response: Response) {
    const ongs = await Ong.find({
      relations: ['incidents'],
      select: ['name', 'email', 'whatsapp', 'city', 'uf'],
    });

    return response.status(200).json({ message: 'success', data: ongs });
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
      delete newOng.password;

      return response.status(201).json({ message: 'success', data: newOng });
    } catch (error) {
      return response.status(400).json({ message: String(error), data: {} });
    }
  }
}
