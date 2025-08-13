const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io"); // Require Socket.IO at top
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");



const allowedOrigins = ["http://localhost:5173", "http://localhost:5174"];

const corsOptions = {
  origin: allowedOrigins,
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // ✅ Allow cookies & Authorization headers
  optionsSuccessStatus: 204,
};


// creatign server obejct
const app = express();
const server = createServer(app);

// cors policy  for normal api
app.use(cors(corsOptions));
app.use(cookieParser());

// Now initialize Socket.IO after server is created
//cors policy for socket
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // ✅ Allow cookies & Authorization headers
    optionsSuccessStatus: 204,
  },
});

// middleware for socket
// io.use((socket, next) => {
//   const cookie = socket?.handshake?.headers?.cookie;

//   if (!cookie) {
//     console.error("Authentication Error: No cookie found in headers");
//     return next(new Error("Authentication Error: No cookie provided"));
//   }

//   try {
//     const token = cookie.split("=")[1].trim();
//     console.log(token);

//     const decoded = jwt.verify(token, "LONEWOL");
//     console.log(decoded);
//     socket.user = decoded;
//     return next();
//   } catch (error) {
//     console.log("inside error");
//     return next(new Error(`Authentication Error: ${error.message}`));
//   }
// });

// Optional: Socket.IO connection handler
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  socket.on("sendMessage", (message) => {
    console.log("Received from client:", message);

    // Optional: Broadcast to others or emit back
    socket.emit("receiveMessage", `Adil Server received: ${message}`);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

// Express route
//testign route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Test Successful" });
});

//dummy login only for token
const JWT_SECRET = "LONEWOLF";
app.get("/login", (req, res) => {
  const token = jwt.sign({ _id: "cbgwsadkbvckdbckjds" }, JWT_SECRET);

  res.cookie("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict", // Prevents CSRF attacks
    maxAge: 24 * 60 * 60 * 1000, // 1 day
  });
  res.status(200).send({ message: "Login Successful" });
});

const PORT = 8000;

server.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
