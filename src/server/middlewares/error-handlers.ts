import express from "express";

export const notFoundHandler = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const error = new Error(`${req.method} ${req.originalUrl} not found`);
  error["status"] = 404;
  next(error);
};

export const globalErrorHandler = (
  error: Error,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  console.log(error);
  res.status(error["status"] || 500);
  res.json({ error: error.message });
};
