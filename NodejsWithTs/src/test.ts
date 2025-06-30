// auth.controller.ts

import jwt from "jsonwebtoken";
import config from "./config";


export const loginUser = () => {
  const userPayload = {
    id: "c316c1b0-9f2f-42c5-9bbd-15a645471e09",
  };

  const token = jwt.sign(userPayload, config.secretKey, {
    expiresIn: '1h',
    issuer:"codeCafe24"
  });
console.log(token);

};


loginUser()
