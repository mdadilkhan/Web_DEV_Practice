import express, { NextFunction, Request, Response } from "express";
import { startGrpcServer } from "./grpc/server";

 



const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))



const PORT=3001


app.get('/health',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({message:"seccess"})
})


// we dont need rest for grpc without express server we can communicate with microservice rest can be used to communncate with frontend
app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
})


// this is used to create grpc server
startGrpcServer()