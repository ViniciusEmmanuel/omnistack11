import * as express from 'express';

const Route = express.Router();

import { OngController } from '../app/controllers/OngController';
import { IncidentController } from '../app/controllers/IncidentController';

Route.post('/ongs', OngController.store);

Route.post('/incidents', IncidentController.store);

export default Route;
