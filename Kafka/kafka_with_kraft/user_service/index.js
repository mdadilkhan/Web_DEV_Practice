// user-service.js
const express = require('express');
const bodyparser = require('body-parser');
const { Kafka } = require('kafkajs');

const app = express();
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello from user service' });
});

const PORT = 6970;
app.listen(PORT, () => {
  console.log(`User service is running at port ${PORT}`);
  startKafkaConsumer(); // Start Kafka only after server is running
});

// Kafka consumer logic
const kafka = new Kafka({
  clientId: 'user-service',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'user-group' });

async function startKafkaConsumer() {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: 'order-topic', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const order = JSON.parse(message.value.toString());
        console.log('👤 User service received order:', order);
        console.log(`📦 User order processed: ${order.id}`);
      },
    });

    console.log('User Kafka consumer started...');
  } catch (err) {
    console.error('User Kafka consumer error:', err);
  }
}
