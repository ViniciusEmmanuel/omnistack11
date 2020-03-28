import { Router } from 'express';

const Route = Router();

import { SessionController } from '../app/controllers/SessionController';
import { OngController } from '../app/controllers/OngController';
import { IncidentController } from '../app/controllers/IncidentController';

Route.post('/session', SessionController.store);
Route.post('/ongs', OngController.store);

Route.get('/ongs', OngController.index);

Route.get('/incidents', IncidentController.index);
Route.post('/incidents', IncidentController.store);
Route.post('/incidents/:id', IncidentController.delete);

export default Route;
