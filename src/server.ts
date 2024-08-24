import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  console.log(`Received ${req.method} request for ${req.path}`);
  res.send('Hello, TS-Node-OpenAI-Express-API!');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});