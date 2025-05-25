const express = require("express");
const bodyparser = require("body-parser");
const { connectProducer, disconnectProducer } = require("./kafka/producer");
const { createConsumer } = require("./kafka/consumer");
const handleOrderCreated = require("./consumer/orderCreated");

const orderRoutes = require("./routes/order");

const app = express();

app.use(bodyparser.json());

app.get("/test", (req, res) => {
  res.status(200).json({ msg: "Hello from order service" });
});

app.use("/", orderRoutes);



const PORT = 6969;

const startServer = async () => {
  try {
    const server = app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
    
    await connectProducer();
    await createConsumer("order-group", "orders.created", handleOrderCreated);

   

    process.on("SIGINT", async () => {
      console.log("Shutting down gracefully...");
      await disconnectProducer();
      server.close(() => {
        console.log("HTTP server closed");
        process.exit(0);
      });
    });
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
};

startServer();
