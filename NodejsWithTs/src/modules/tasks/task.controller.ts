import { NextFunction, Request, Response } from "express";
import EntityNotFoundError from "../../errors/EntityNotFoundError";

export const listTasks = (req: Request, res: Response) => {
  res.status(200).json({ message: "success", data: [] });
};

export const getTask = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {


  try {
    // throw new Error("Db operation failed");
    throw new EntityNotFoundError({
      message: "Not found",
      statusCode: 404,
      code: "ERR_NF",
    });
    res
      .status(200)
      .json({ message: "success", data: { id: 1, name: "task1" } });
  } catch (error:any) {
    console.log("isidne error block", error.message,error.name);

    next(error);
  }
};
