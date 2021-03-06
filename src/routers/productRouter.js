import express from 'express';
import expressAsyncHandler from 'express-async-handler';
import { isAdmin, isAuth } from '../../utils.js';
import data from '../data.js';
import Product from '../models/productModel.js'

const productRouter = express.Router();

// send list of products to frontend
productRouter.get('/', expressAsyncHandler(async(req, res) => {
  const products = await Product.find({});
  res.send(products);
}));

productRouter.get('/seed', expressAsyncHandler(async(req, res) => {
  // await Product.remove({}); //remove all products

  const createdProducts = await Product.insertMany(data.products);
  res.send({ createdProducts });
}));

// product details
productRouter.get('/:id', expressAsyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id);

  if(product){
    res.send(product)
  } else {
    res.status(404).send({ message: 'Product Not Found' });
  }
}));

// admin create product
productRouter.post(
  '/',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const product = new Product({
      name: 'sample name ' + Date.now(),
      altName: 'sample alt name',
      image: '/images/p1.jpg',
      lighting: 'sample lighting',
      price: 0,
      countInStock: 0,
      rating: 0,
      numReviews: 0,
      description: 'sample description',
    });
    const createdProduct = await product.save();
    res.send({ message: 'Product Created!', product: createdProduct });
}));


// admin product edit
productRouter.put(
  '/:id',
  isAuth,
  isAdmin,
  expressAsyncHandler(async (req, res) => {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (product) {
      product.name = req.body.name;
      product.altName = req.body.altName;
      product.price = req.body.price;
      product.image = req.body.image;
      product.lighting = req.body.lighting;
      product.countInStock = req.body.countInStock;
      product.description = req.body.description;
      const updatedProduct = await product.save();
      res.send({ message: 'Product updated!', product: updatedProduct})
    } else {
      res.status(404).send({ message: 'Product Not Found' });
    }
  })
);

export default productRouter;