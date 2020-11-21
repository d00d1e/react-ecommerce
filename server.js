import express from 'express';
import data from './src/data.js';

const app = express();

app.get('/api/products', (req, res) => {
  res.send(data.products)
});

app.get('/', (req, res) => {
  res.send("Server is ready");
});


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});

