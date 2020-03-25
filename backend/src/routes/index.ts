import * as express from 'express';

const Route = express.Router();

Route.get('/', (_, res) => {
  return res.status(200).json('Helo Word');
});

export default Route;
