import { Request, Response } from 'express';

import { Incident } from '../models/incident';

export abstract class IncidentController {
  public static async store(request: Request, response: Response) {
    const { title, description, value } = request.body;

    const ongId = request.headers.authorization;

    const incident = new Incident();

    incident.ong_id = String(ongId);
    incident.title = title;
    incident.description = description;
    incident.value = value;

    try {
      await incident.create<Incident>(Incident.name, incident);
      return response.status(201).json({ message: 'success', data: incident });
    } catch (error) {
      return response.status(400).json({ message: String(error), data: [] });
    }
  }
}
