import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

export default (req: Request, res: Response, next: NextFunction) => {
  const token: string = (req.headers.authorization || '').replace(/Bearer\s?/, '');

  if (token) {
    try {
      const decoded: any = jwt.verify(token, 'secret123');

      // @ts-ignore
      req.userId = decoded._id;
      next();
    } catch (e) {
      return res.status(403).json({
        message: 'No access',
      });
    }
  } else {
    return res.status(403).json({
      message: 'No access',
    });
  }
};
