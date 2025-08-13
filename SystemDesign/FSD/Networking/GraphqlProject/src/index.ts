// index.ts
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";
import express, { NextFunction, Request,Response } from "express";
import { typeDefs, resolvers } from "./schema"; // Keep this import modular
import config from "./config";
import connectDb from "./database/db";
import cookieParser from "cookie-parser";
import morganMiddleware from "./middleware/morgan-middleware";
import helmet from "helmet";
import cors from "cors";
import errorHandler from "./middleware/error-handler";
// import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default"; // ✅ import this

const allowedOrigins = [
  "http://localhost:3000",
  "http://localhost:5174",
  "https://sub.yourdomain.com",
  "https://anotherdomain.com",
];

const corsOptions = {
  origin: allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // ✅ Allow cookies & Authorization headers
  optionsSuccessStatus: 204,
};

async function startServer() {
  const app = express();

 
 app.disable("x-powered-by")
  app.use(morganMiddleware)
  app.use(helmet({contentSecurityPolicy: false, }))// 🔓 false Allow Apollo Studio to load properly  but not in prodcution
  app.use(cors(corsOptions))
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(cookieParser());

    
  // Initialize database connection
  connectDb();

  // Create Apollo Server instance
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  // Start Apollo Server
  await server.start();

  // Apply GraphQL middleware
//   app.use(
//     "/graphql",
//     expressMiddleware(server) // Apollo middleware
// );



// you can add global middleware in graphql route isadmin is a middle ware  which can be places after express.json() middleware of graphql route
const isAdmin=(req:Request,res:Response,next:NextFunction)=>{
  const user={role:'user'}

  if(user.role==='admin')
    next()
  else{
    res.send({message:"bhag chutya"})
  }
}
app.use(
  '/graphql',
  cors<cors.CorsRequest>(),
  express.json(),
  expressMiddleware(server),
);

  // Health check endpoint
  app.get("/health", (req, res) => {
    res.status(200).json({ message: "success" });
  });

  app.use(errorHandler)
  // Start Express server
  app.listen(config.port, () => {
    console.log(`Server is running at port ${config.port}`);
    console.log(`GraphQL endpoint: http://localhost:${config.port}/graphql`);
  });
}

// Start the server and handle any initialization errors
startServer().catch((error) => {
  console.error("Failed to start server:", error);
  process.exit(1);
});



