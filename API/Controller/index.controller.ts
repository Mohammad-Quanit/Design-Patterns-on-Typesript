import { NextFunction, Request, Response } from "express";

const IndexController = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(200).json({ message: "Hello, World!" });
};

export = IndexController;