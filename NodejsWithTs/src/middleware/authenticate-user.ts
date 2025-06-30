import { Request, Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import AuthenticationError from "../errors/AuthenticationError";
import config from "../config";
import { AuthenticatedUser } from "../types/types";





const authenticateUser = (req: Request, res: Response, next: NextFunction) => {


  const token = req.cookies.token;

  if (!token) {
    throw new AuthenticationError({
      message: "Authorization token missing or malformed",
      statusCode: 401,
      code: "ERR_AUTH",
    });
  }
  try {
    const decoded = jwt.verify(token, config.secretKey) as AuthenticatedUser;

    // ✅ Attach only user ID to request
    req.user = decoded;

    next();
  } catch (error) {
    next(error);
  }
};

export default authenticateUser;
