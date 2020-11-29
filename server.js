import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './src/routers/userRouter.js';
import productRouter from './src/routers/productRouter.js';
import orderRouter from './src/routers/orderRouter.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// connect mongoose to db
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/folia', {
// mongoose.connect('mongodb://localhost/folia', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true})
  .then(() => console.log("Database Connected"))
  .catch(err => console.log(err));

// routes
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);
app.use('/api/orders', orderRouter);

// paypal api sandbox
app.get('/api/config/paypal', (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

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

