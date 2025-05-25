const kafka = require("./kafka");

const producer = kafka.producer();

const connectProducer = async () => {
  await producer.connect();
};

const disconnectProducer = async () => {
  await producer.disconnect();
};

const sendMessage = async (topic, key, message) => {
  return await producer.send({
    topic,
    messages: [{ key, value: JSON.stringify(message) }],
  });
};

module.exports = {
  connectProducer,
  disconnectProducer,
  sendMessage,
};
