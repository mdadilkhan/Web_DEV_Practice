import {NextFunction,Request,Response} from 'express'
import config from '../config'
import { getErrorMessage } from '../utils'
import CustomError from '../errors/CustomError';



export default function errorHandler(error:unknown,req:Request,res:Response,next:NextFunction){
    console.log("inside middleware");
    console.log(res.headersSent);
    
  if(res.headersSent || config.debug){
    console.log("inside if of error handler");
    
    next(error)
    return
  }

  if(error instanceof CustomError){
    res.status(error.statusCode).json({
      error:{
        message:error.message,
        code:error.code
      }
    })
    return;
  }


  res.status(500).json({
    error:{
        message: getErrorMessage(error) || "An error occured. Please view logs for more details. "
    }
  })
}