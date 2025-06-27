import { Request,Response } from "express";


export const listProjects=(req:Request,res:Response)=>{
    res.status(200).json({message:'success',data:[]})
}

export const getProject=(req:Request,res:Response)=>{
    res.status(200).json({message:'success',data:{id:1,name:'project1'}})
}

export const listProjectTasks=(req:Request,res:Response)=>{
    res.status(200).json({message:'success',data:[]})
}

