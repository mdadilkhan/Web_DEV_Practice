import express, { NextFunction, Request, Response, urlencoded } from "express";
import { client } from "./grpc/client";
const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// we can call serverB data like this or we can do it inisde rest endpoint so broser can hit the api and we get the data from server B
client.GetAllCustomer({},(err:any,res:any)=>{
  if (err) console.error(err);
  else console.log(res);
})

client.GetCustomerById({id:1},(err:any,res:any)=>{
    if(err)console.log(err)
    else console.log(res);
    
})

client.InsertCustomer({ id: "6", name: "Saniya Atique", address: "Jamshedpur", age: 20 },(err:any,res:any)=>{
    if(err)console.log(err)
    else console.log(res);
})


const PORT=4001


app.get('/health',(req:Request,res:Response,next:NextFunction)=>{
    res.status(200).json({message:"seccess"})
})

// rest endpoitn to call the server B to get the data 
app.get("/getAllCustomer", (req: Request, res: Response) => {
  try {
    client.GetAllCustomer({}, (err: any, grpcResponse: any) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "gRPC Error", error: err });
      }

      console.log("GRPC Response", grpcResponse);
      return res.status(200).json(grpcResponse); // <-- Send data to the browser
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
    
})

