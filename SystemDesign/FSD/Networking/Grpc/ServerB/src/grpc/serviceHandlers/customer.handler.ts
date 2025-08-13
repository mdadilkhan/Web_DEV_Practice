import { sendUnaryData, ServerUnaryCall, status } from "@grpc/grpc-js";

//  ✅ call: ServerUnaryCall<RequestType, ResponseType>
//  This contains the request details.
//  call.request: holds the actual input data from the client.
//  call.metadata: metadata sent by the client (e.g., auth tokens, tracing, etc.)
//  call.getPeer(): gets the client's address.
//  call.getDeadline(): Returns the deadline set for the request.

// ✅ callback: callback is a function that you call when you're done handling the request — either to send back a response or an error.
// first argument will be error and then data
//! for success
// callback(null, { name: 'Adil Khan', email: 'adil@example.com' });
//! for error
// callback({
//   code: status.NOT_FOUND,
//   message: 'Customer not found',
// }, null);

interface Customer {
  id: string;
  name: string;
  address: string;
  age: Number;
}

// Dummy customer array
const customers: Customer[] = [
  { id: "1", name: "Adil Khan", address: "Bihar", age: 24 },
  { id: "2", name: "Sarah Lee", address: "Usa", age: 24 },
  { id: "3", name: "John Doe", address: "Amsterdam", age: 24 },
  { id: "4", name: "Jane Smith", address: "singapoore", age: 24 },
  { id: "5", name: "Mohit Gupta", address: "Melbourne", age: 24 },
];

console.log(status);

export const CustomerServiceHandlers = {
  GetAllCustomer: (
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>
  ) => {
    try {
      // console.log("call>>>", call);

      return callback(null, { customers });
    } catch (error) {
      return callback({
        code: status.INTERNAL,
        message: "Internal Server Error",
      });
    }
  },

  GetCustomerById: (
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>
  ) => {
    try {
      const { id } = call.request;

      if (!id) {
        return callback(
          {
            code: status.INVALID_ARGUMENT,
            message: "Customer ID is required",
          },
          null
        );
      }

      const customer = customers.find((item) => id === item.id);

      if (!customer) {
        return callback(
          {
            code: status.NOT_FOUND,
            message: "customer detials not found",
          },
          null
        );
      }

      return callback(null, customer);
    } catch (error) {
      return callback(
        {
          code: status.INTERNAL,
          message: "Internal Server Error",
        },
        null
      );
    }
  },
  InsertCustomer: (
    call: ServerUnaryCall<any, any>,
    callback: sendUnaryData<any>
  ) => {
    try {

      
      const data: Customer = call.request;
      const { id, name, age, address } = data;
      if (!id || !name || !age || !address) {
        callback(
          {
            code: status.INVALID_ARGUMENT,
            message: "All fileds are mandatory",
          },
          null
        );
      }


      
      return callback(
       null,
       data
      );
    } catch (error) {
      return callback(
        {
          code: status.INTERNAL,
          message: "Internal Server Error",
        },
        null
      );
    }
  },
};

// these are the status avalibale in grpc for error ahndling
// {
//   '0': 'OK',
//   '1': 'CANCELLED',
//   '2': 'UNKNOWN',
//   '3': 'INVALID_ARGUMENT',
//   '4': 'DEADLINE_EXCEEDED',
//   '5': 'NOT_FOUND',
//   '6': 'ALREADY_EXISTS',
//   '7': 'PERMISSION_DENIED',
//   '8': 'RESOURCE_EXHAUSTED',
//   '9': 'FAILED_PRECONDITION',
//   '10': 'ABORTED',
//   '11': 'OUT_OF_RANGE',
//   '12': 'UNIMPLEMENTED',
//   '13': 'INTERNAL',
//   '14': 'UNAVAILABLE',
//   '15': 'DATA_LOSS',
//   '16': 'UNAUTHENTICATED',
//   OK: 0,
//   CANCELLED: 1,
//   UNKNOWN: 2,
//   INVALID_ARGUMENT: 3,
//   DEADLINE_EXCEEDED: 4,
//   NOT_FOUND: 5,
//   ALREADY_EXISTS: 6,
//   PERMISSION_DENIED: 7,
//   RESOURCE_EXHAUSTED: 8,
//   FAILED_PRECONDITION: 9,
//   ABORTED: 10,
//   OUT_OF_RANGE: 11,
//   UNIMPLEMENTED: 12,
//   INTERNAL: 13,
//   UNAVAILABLE: 14,
//   DATA_LOSS: 15,
//   UNAUTHENTICATED: 16
// }
