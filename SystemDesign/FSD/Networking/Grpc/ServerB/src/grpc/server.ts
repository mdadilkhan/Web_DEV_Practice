import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';
import { CustomerServiceHandlers } from './serviceHandlers/customer.handler';

const PROTO_PATH = path.join(__dirname, '../proto/customer.proto');


// object which takes as a parameter of loadSync fucntion basically used for configuration that you allow or not
const packageDefinition = protoLoader.loadSync(PROTO_PATH,{
    keepCase:true,
    longs:String,
    enums:String,
    arrays:true,
    // includeDirs: [path.join(__dirname, 'proto', 'shared')] very important when you declare type in diff file of proto

});


const proto = grpc.loadPackageDefinition(packageDefinition) as any;

const server = new grpc.Server();


// added route for my customer service defiend in prot
server.addService(proto.customerservice.CustomerService.service, CustomerServiceHandlers);






export const startGrpcServer = () => {
  const port = '0.0.0.0:50051';
  // for production use createSsl() this meahtod instead of createInsecure()
  server.bindAsync(port, grpc.ServerCredentials.createInsecure(), () => {
    console.log(`gRPC server running at ${port}`);

  });
};
