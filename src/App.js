import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartView from './views/CartView';
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';
import SigninView from './views/SigninView';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link className="brand" to="/">folia<i className="fab fa-pagelines"></i></Link>
          </div>
          <div id="links">
            <Link to="/cart">Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>
            <Link to="/signin">Sign In</Link>
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomeView} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/cart/:id?" component={CartView} />
          <Route path="/signin" component={SigninView} />
        </main>
        <footer className="row center">&#169;2020 All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;