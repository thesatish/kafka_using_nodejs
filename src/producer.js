// producer.js
const { Kafka } = require('kafkajs');

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092']
});

const producer = kafka.producer();

const sendMessage = async (message) => {
  await producer.connect();
  await producer.send({
    topic: 'test-topic',
    messages: [{ value: message }],
  });
  await producer.disconnect();
};

module.exports = sendMessage;
