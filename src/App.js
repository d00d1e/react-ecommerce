import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import CartView from './views/CartView';
import HomeView from './views/HomeView';
import OrderView from './views/OrderView';
import PaymentView from './views/PaymentView';
import ProductView from './views/ProductView';
import RegisterView from './views/RegisterView';
import ShippingView from './views/ShippingView';
import SigninView from './views/SigninView';
import OrderDetailsView from './views/OrderDetailsView';
import OrderHistoryView from './views/OrderHistoryView';
import ProfileView from './views/ProfileView';

function App() {
  const cart = useSelector(state => state.cart);
  const { cartItems } = cart;

  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin;

  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };

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
            {userInfo ? (
                <div className="dropdown">
                  <Link to="#">{userInfo.name} <i className="fa fa-caret-down"></i></Link>
                  <ul className="dropdown-content">
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/orderhistory">Orders</Link></li>
                    <li><Link to="#signout" onClick={signoutHandler}>Sign Out</Link></li>
                  </ul>
                </div>
              ) : (
                <Link to="/signin">Sign In</Link>
            )}
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomeView} />
          <Route path="/product/:id" component={ProductView} />
          <Route path="/cart/:id?" component={CartView} />
          <Route path="/signin" component={SigninView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/shipping" component={ShippingView} />
          <Route path="/payment" component={PaymentView} />
          <Route path="/placeorder" component={OrderView} />
          <Route path="/order/:id" component={OrderDetailsView} />
          <Route path="/orderhistory" component={OrderHistoryView} />
          <Route path="/profile" component={ProfileView} />
        </main>
        <footer className="row center">&#169;2020 All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;