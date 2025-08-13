import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

app.use(cors());

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ succuss: true });
});

app.get("/sse", (req: Request, res: Response) => {
  res.setHeader("content-type", "text/event-stream");
  res.setHeader("Cache-Control", "no-cache");
  res.setHeader("Connection", "keep-alive");
   const payload = {
  time: new Date().toISOString(),
  users: ["Adil", "John", "Jane"],
  active: true,
};

// sendig string data
//   res.write(
//     `data: Connection established at ${new Date().toLocaleTimeString()}\n\n`
//   );


// seding json data
  res.write(`data: ${JSON.stringify(payload)}\n\n`);

  // Interval message every 5 seconds
  const interval = setInterval(() => {
    // res.write(`data: Server time: ${new Date().toISOString()}\n\n`);
    res.write(`data: ${JSON.stringify(payload)}\n\n`);
  }, 5000);

  req.on("close", () => {
    clearInterval(interval);
    console.log("SSE connection closed");
  });
});


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});
