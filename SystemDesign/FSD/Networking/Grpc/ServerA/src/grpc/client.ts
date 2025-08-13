import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import path from 'path';


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
const customerservice=proto.customerservice
export const client = new customerservice.CustomerService(
  '0.0.0.0:50051',
  grpc.credentials.createInsecure()
);











