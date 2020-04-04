import { Router } from 'express';

const Route = Router();

import { AuthJwt } from '../app/middlewares/authJwt';

import { SessionController } from '../app/controllers/SessionController';
import { OngController } from '../app/controllers/OngController';
import { IncidentController } from '../app/controllers/IncidentController';

Route.post('/session', SessionController.store);
Route.post('/ongs', OngController.store);
Route.get('/incidents', IncidentController.index);

/**
 *  authenticate
 */

Route.use(AuthJwt);

Route.get('/ongs', OngController.show);

Route.post('/incidents', IncidentController.store);
Route.delete('/incidents/:id', IncidentController.delete);

export default Route;
