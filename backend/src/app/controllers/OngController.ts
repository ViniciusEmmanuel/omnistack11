import { Request, Response } from 'express';
import { Ong } from '../models/ong';

export abstract class OngController {
  public static async store(request: Request, response: Response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const ong = new Ong();

    ong.name = String(name);
    ong.email = String(email);
    ong.whatsapp = String(whatsapp);
    ong.city = String(city);
    ong.uf = String(uf);

    try {
      await ong.create<Ong>(Ong.name, ong);

      return response.status(200).json({ message: 'success', data: ong });
    } catch (error) {
      return response.status(400).json({ message: String(error), data: [] });
    }
  }
}
