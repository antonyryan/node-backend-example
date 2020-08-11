import { Request, Response, NextFunction } from 'express';

const validatePost = (
  rules: Record<string, (value: unknown) => boolean>,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  const value = req.body;
  const isValid = Object.keys(rules).every((key) => rules[key](value[key]));

  if (isValid) {
    next();
  } else {
    res.status(400);
    res.send('Invalid parameters for client!');
  }
};

// eslint-disable-next-line max-len
export default (rules: Record<string, (value: unknown) => boolean>) => (req: Request, res: Response, next: NextFunction): unknown => validatePost(rules, req, res, next);
