import amqp from "amqplib";
interface message{
    id:string,
    name:string,
    price:number
}
async function announceNewProduct(message:message) {
  try {
    const connection = await amqp.connect("amqp://localhost"); // created connection with localhost
    const channel = await connection.createChannel(); // creating channel inside a connection.channel is  a virtual connection inside a TCP connection
    const exchange = "bordcast_exchange"; // creating name of exchnage
    const exchangeType="fanout"

    
    await channel.assertExchange(exchange, exchangeType, { durable: true });
    await channel.publish(exchange,"",Buffer.from(JSON.stringify(message)),{persistent:true});
    console.log('Mesage sent');
    
    setTimeout(() => {
      connection.close();
    }, 500);
  } catch (error) {
    console.log(error);
  }
}






setInterval(()=>{
   announceNewProduct({id:"123",name:"iphone 19 ultra pro max",price:299999}); 
},500)