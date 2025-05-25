// mailer-service.js
const express = require('express');
const bodyparser = require('body-parser');
const { Kafka } = require('kafkajs');

const app = express();
app.use(bodyparser.json());

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'Hello from mailer service' });
});

const PORT = 6971;
app.listen(PORT, () => {
  console.log(`Mailer service is running at port ${PORT}`);
  startKafkaConsumer(); // Start Kafka only after server is running
});

// Kafka consumer logic
const kafka = new Kafka({
  clientId: 'mailer-service',
  brokers: ['localhost:9092'],
});

const consumer = kafka.consumer({ groupId: 'mailer-group' });

async function startKafkaConsumer() {
  try {
    await consumer.connect();
    await consumer.subscribe({ topic: 'order-topic', fromBeginning: true });

    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const order = JSON.parse(message.value.toString());
        console.log('📧 Mailer received order:', order);
        console.log(`✅ Email sent for Order ID: ${order.id}`);
      },
    });

    console.log('Mailer Kafka consumer started...');
  } catch (err) {
    console.error('Mailer Kafka consumer error:', err);
  }
}
