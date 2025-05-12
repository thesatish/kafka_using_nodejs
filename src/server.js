// server.js
const express = require('express');
const sendMessage = require('./producer');
const consumeMessages = require('./consumer');

const app = express();
app.use(express.json());

app.post('/send', async (req, res) => {
  const { message } = req.body;
  if (!message) return res.status(400).send('Message is required');

  await sendMessage(message);
  res.send('Message sent to Kafka');
});

app.listen(3000, async () => {
  console.log('Server running on port 3000');
  consumeMessages();
});
