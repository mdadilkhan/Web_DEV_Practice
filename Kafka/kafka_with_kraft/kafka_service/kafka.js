const { Kafka,logLevel } = require("kafkajs");


const clientId="init"
const brokers=["localhost:9092"]
const log=logLevel.INFO
const kafka = new Kafka({
  clientId,
  brokers,
  log
});

const topicsToCreate = [
  {
    topic: "orders.created",
    numPartitions: 3,
    replicationFactor: 1,
  },
  {
    topic: "users.updated",
    numPartitions: 1,
    replicationFactor: 1,
  },
];

async function init() {
  const admin = kafka.admin();
  const producer = kafka.producer();

  try {
    await admin.connect();
    console.log("Kafka Connected");
    

    const topics=await admin.listTopics()
    console.log(topics);
    
    const newTopicsCreated=await admin.createTopics({ topics: topicsToCreate });
    console.log("Topics created successfully.",newTopicsCreated);


    // await producer.connect();
    // await producer.send({
    //   topic: "orders.created",
    //   messages: [{ value: "Hello KafkaJS user!" }],
    // });
    // console.log("Message sent.");
    // await producer.disconnect();
  } catch (error) {
    console.error("Kafka error:", error);
  }finally{
    await admin.disconnect();
    console.log("Kafka Admin Disconnected!!!");
    
  }
}

init();
