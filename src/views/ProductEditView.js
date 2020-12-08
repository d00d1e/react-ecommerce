
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductEditView(props) {
  const productId = props.match.params.id;

  const [name, setName] = useState('');
  const [altName, setAltName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');
  const [countInStock, setCountInStock] = useState('');
  const [lighting, setLighting] = useState('');
  const [description, setDescription] = useState('');

  const productDetails = useSelector(state => state.productDetails);
  const { loading, error, product } = productDetails;

  const dispatch = useDispatch();
  useEffect(() => {
    if (!product || (product._id !== productId)) {
      dispatch(detailsProduct(productId));
    } else {
      setName(product.name);
      setAltName(product.altName);
      setPrice(product.price);
      setImage(product.image);
      setCountInStock(product.countInStock);
      setLighting(product.lighting);
      setDescription(product.description);
    }
  }, [product, dispatch, productId]);

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Edit Product: #{productId}</h1>
        </div>
        {loading ? (
          <LoadingBox />
        ) : error ? (
          <MessageBox variant="danger">{error.message}</MessageBox>
        ) : (
          <>
            <div>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="altName">Alt Name</label>
              <input
                type="text"
                id="altName"
                placeholder="alt name"
                value={altName}
                onChange={(e) => setAltName(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="price">Price</label>
              <input
                type="text"
                id="price"
                placeholder="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="image">Image</label>
              <input
                type="text"
                id="image"
                placeholder="image"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="stock">Stock</label>
              <input
                type="text"
                id="stock"
                placeholder="stock"
                value={countInStock}
                onChange={(e) => setCountInStock(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="lighting">Lighting</label>
              <input
                type="text"
                id="lighting"
                placeholder="lighting"
                value={lighting}
                onChange={(e) => setLighting(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea
                type="text"
                rows="5"
                id="description"
                placeholder="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div>
              <label />
              <button className="primary" type="submut">Update</button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
