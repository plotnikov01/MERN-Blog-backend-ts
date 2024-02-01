import { Request, Response, NextFunction } from 'express';
import { validationResult, Result, ValidationError } from 'express-validator';

export default (
  req: Request,
  res: Response<any, Record<string, any>>,
  next: NextFunction,
): void | Response<any, Record<string, any>> => {
  const errors: Result<ValidationError> = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json(errors.array());
  }

  next();
};
