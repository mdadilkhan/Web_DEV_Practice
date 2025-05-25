const kafka = require("./kafka");

const createConsumer = async (groupId, topic, messageHandler) => {
  const consumer = kafka.consumer({ groupId });

  await consumer.connect();
  await consumer.subscribe({ topic, fromBeginning: false });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      try {
        await messageHandler(message);
      } catch (err) {
        console.error("Error handling message", err);
      }
    },
  });

  console.log(`✅ Kafka consumer listening on topic: ${topic}`);
};

module.exports = {
  createConsumer,
};
