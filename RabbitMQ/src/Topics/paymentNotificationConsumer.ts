import amqp from "amqplib";

async function receiveEmail() {
  try {
    const connection = await amqp.connect("amqp://localhost"); // created connection with localhost
    const channel = await connection.createChannel(); // creating channel inside a connection.channel is  a virtual connection inside a TCP connection
    const exchange = "notification_exchange"; //should be same as the producer
    const queue = "payment_queue";
    const exchangeType = "topic";

    await channel.assertExchange(exchange, exchangeType, { durable: true });
    await channel.assertQueue(queue, { durable: true });
    await channel.bindQueue(queue, exchange, "payment.*");

    console.log("waiting for new message!!!");

    channel.consume(queue, (message) => {
      if (message !== null) {
        console.log("message received", JSON.parse(message.content.toString()));
        channel.ack(message);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

receiveEmail();
