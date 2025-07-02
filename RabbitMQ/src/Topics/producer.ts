import amqp from "amqplib";
interface message{
    orderId?:string,
    status:string,
    paymentId?:string
}
async function sendMail(routingKey: string,message:message) {
  try {
    const connection = await amqp.connect("amqp://localhost"); // created connection with localhost
    const channel = await connection.createChannel(); // creating channel inside a connection.channel is  a virtual connection inside a TCP connection
    const exchange = "notification_exchange"; // creating name of exchnage
    const exchangeType="topic"


    // now creating exchange
    // many type of exchange now using direct one
    // false means data persisit nhi krega means broker restart survuve nhi krega true hone pr krega
    await channel.assertExchange(exchange, exchangeType, { durable: true });
    await channel.publish(exchange,routingKey,Buffer.from(JSON.stringify(message)),{persistent:true});
    console.log("[x] sent '%s':'%s'",routingKey,JSON.stringify(message))
    console.log(`Msg was sent with routing key as ${routingKey} and content as ${message}`);
    
    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.log(error);
  }
}


sendMail("order.placed",{orderId:"123",status:"placed"}); 
sendMail("payment.processed",{paymentId:"1asx32edas2c21sa2",status:"proce"}); 