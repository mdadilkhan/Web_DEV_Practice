import { NextFunction, Request,Response } from "express";
import * as projectService from "./project.service";
import BadRequestError from "../../errors/BadRequestError";
import EntityNotFoundError from "../../errors/EntityNotFoundError";
import logger from "../../logger";


export const getProjectHandler=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{

  
  logger.debug("req task>>")
  try {
    const id=req.params.id
    if(!id || typeof id !=='string' || id.trim() ===""){
        throw new BadRequestError({
            message:"Project id is required",
            statusCode:400,
            code:"ERR_BR"
        })
    }
    const data=await projectService.getProject(id)

    if (!data) {
      throw new EntityNotFoundError({
        message: "Project not found",
        statusCode: 404,
        code: "ERR_NF",
      });
    }
    res.status(200).json({message:"success",data})
  } catch (error) {
     console.log("catch block",error);
     next(error);
  }
}


export const listProjectHandler=async(req:Request,res:Response,next:NextFunction):Promise<void>=>{
  // logger.debug("list project")
  logger.child({
    logMetadata: `User ${req.user?.id}`
  }).debug("isrequesting task")
    try {
        const data=await projectService.listProject()
        if(data && data.length===0){
           throw new EntityNotFoundError({
            message:"No project found",
            statusCode:404,
            code:"ERR_NF"
           })
        }
      res.status(200).json({message:"success",data})
    } catch (error) {
        next(error)
    }
}


export const listProjectTaskHandler=(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({message:'success',data:[]})
}

