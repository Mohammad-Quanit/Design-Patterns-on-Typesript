import { NextFunction, Request, Response } from "express";

export const AddItem = async(req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: "Create one item" });
  } catch (error) {
    next(error);
  }
}

export const GetItems = async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.json({ message: 'Get all items' });
  } catch (error) {
    next(error);
  }
}