import { Request, Response, NextFunction, json } from 'express';
import { verify } from 'jsonwebtoken';
import { promisify } from 'util';
import { ConfigJwt } from '../config/jwt';

interface IJwt {
  id?: string;
  iat?: number;
  exp?: number;
}

export async function AuthJwt(
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (!ConfigJwt.secret) {
    return response.status(500).json({ message: 'Error, contate o suporte.' });
  }

  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response
      .status(401)
      .json({ message: 'Acesso não autorizado!!!.', data: {} });
  }

  try {
    const [, token] = authHeader.split(' ');
    const { id } = (await promisify(verify)(token, ConfigJwt.secret)) as IJwt;

    response.locals = {
      ...response.locals,
      ongId: id,
    };

    return next();
  } catch (err) {
    return response.status(401).json({ error: 'Acesso não autorizado!!!.' });
  }
}
