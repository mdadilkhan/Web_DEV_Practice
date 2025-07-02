import amqp from "amqplib";

async function receiveEmail() {
  try {
    const connection = await amqp.connect("amqp://localhost"); // created connection with localhost
    const channel = await connection.createChannel(); // creating channel inside a connection.channel is  a virtual connection inside a TCP connection

    await channel.assertQueue("mail_queue", { durable: false });
    channel.consume("mail_queue", (message) => {
      if (message !== null) {
        console.log("message received", JSON.parse(message.content.toString()));
        channel.ack(message);
      }
    });
  } catch (error) {
    console.log(error);
  }
}



receiveEmail()
