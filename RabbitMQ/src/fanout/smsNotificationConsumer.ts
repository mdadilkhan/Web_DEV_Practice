import amqp from "amqplib";

async function receivedSmsNotification() {
  try {
    const connection = await amqp.connect("amqp://localhost"); // created connection with localhost
    const channel = await connection.createChannel(); // creating channel inside a connection.channel is  a virtual connection inside a TCP connection
    const exchange = "bordcast_exchange"; //should be same as the producer
    const exchangeType = "fanout";

    await channel.assertExchange(exchange, exchangeType, { durable: true });
    

    // {exclusive:true} this is usweful when conenection is closed then queue will be deleted
    const queue=await channel.assertQueue("",{exclusive:true})
    // nos specified queue name is available so given by rabbitmq and not routing key or pattern in thier params so using empty string ""
    await channel.bindQueue(queue.queue,exchange,"")


    console.log("waiting for new message!!!");

    channel.consume(queue.queue, (message) => {
      if (message !== null) {
        console.log("message received from msg", JSON.parse(message.content.toString()));
        channel.ack(message);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

receivedSmsNotification();
