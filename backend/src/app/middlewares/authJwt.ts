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
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response
      .status(401)
      .json({ message: 'Acesso não autorizado!!!.', data: {} });
  }

  try {
    const [, token] = authHeader.split(' ');
    const decode: IJwt = await promisify(verify)(token, ConfigJwt.secret);

    response.locals = {
      ...response.locals,
      ongId: decode.id,
    };

    return next();
  } catch (err) {
    return response.status(401).json({ error: 'Acesso não autorizado!!!.' });
  }
}
