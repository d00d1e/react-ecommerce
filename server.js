import express from 'express';
import mongoose from 'mongoose';
import userRouter from './src/routers/userRouter.js';
import data from './src/data.js';

const app = express();


// connect mongoose to db
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/folia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true})
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

app.use('/api/users', userRouter);


app.get('/api/products', (req, res) => {
  res.send(data.products)
});

app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(x => x._id === req.params.id);

  if(product) {
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
});

app.get('/', (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
})


const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});

