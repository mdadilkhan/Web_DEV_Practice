import amqp from "amqplib";

async function sendMail() {
  try {
    const connection = await amqp.connect("amqp://localhost"); // created connection with localhost
    const channel = await connection.createChannel(); // creating channel inside a connection.channel is  a virtual connection inside a TCP connection
    const exchange = "mail_echange"; // creating name of exchnage
    const routingKey = "send_mail"; // created routing key

    const message = {
      to: `mdadilakhtar8@gmail.com`,
      from: "khandmdadil094@gmail.com",
      subject: "Hello amqp service",
      body: "Hello adil your order is confirmed",
    };

    // now creating exchange
    // many type of exchange now using direct one
    // false means data persisit nhi krega means broker restart survuve nhi krega true hone pr krega
    await channel.assertExchange(exchange, "direct", { durable: false });
    await channel.assertQueue("mail_queue", { durable: false }); // creatng queue
    await channel.bindQueue("mail_queue", exchange, routingKey); // bidinf the queue with exchange
    await channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(message))
    );

    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.log(error);
  }
}

sendMail();