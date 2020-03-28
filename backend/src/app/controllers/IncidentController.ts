import { Request, Response } from 'express';

import { Incident } from '../models/incident';

export abstract class IncidentController {
  public static async index(_: Request, response: Response) {
    const { ongId } = response.locals;

    const incidents = await Incident.find({ where: { ong_id: ongId } });

    return response.status(200).json({ message: 'success', data: incidents });
  }

  public static async store(request: Request, response: Response) {
    const { title, description, value } = request.body;

    const { ongId } = response.locals;

    const incident = new Incident();

    incident.ong_id = ongId;
    incident.title = title;
    incident.description = description;
    incident.value = value;

    try {
      await Incident.create(incident).save();

      return response.status(201).json({ message: 'success', data: incident });
    } catch (error) {
      return response.status(400).json({ message: String(error), data: [] });
    }
  }

  public static async delete(request: Request, response: Response) {
    const { id } = request.params;

    const incident = await Incident.findOne(id);

    const { ongId } = response.locals;

    if (incident.ong_id !== ongId) {
      return response
        .status(401)
        .json({ message: 'Operação não permitida', data: [] });
    }

    await Incident.delete(id);

    return response.status(204).send();
  }
}
