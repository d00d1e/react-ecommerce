import express from 'express';
import mongoose from 'mongoose';
import userRouter from './src/routers/userRouter.js';
import productRouter from './src/routers/productRouter.js';

const app = express();

// connect mongoose to db
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/folia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true})
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

app.get('/', (req, res) => {
  res.send("Server is ready");
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});


// listener
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Serve at http://localhost:${PORT}`);
});

