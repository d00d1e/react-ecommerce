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
import PrivateRoute from './components/PrivateRoute';
import AdminRoute from './components/AdminRoute';
import ProductListView from './views/ProductListView';
import ProductEditView from './views/ProductEditView';

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
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin">Admin<i className="fa fa-caret-down"></i></Link>
                <ul className="dropdown-content">
                  <li><Link to="/dashboard">DashBoard</Link></li>
                  <li><Link to="/productlist">Products</Link></li>
                  <li><Link to="/orderlist">Orders</Link></li>
                  <li><Link to="/userlist">Users</Link></li>
                </ul>
              </div>
            )}
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/product/:id" component={ProductView} />
          <Route exact path="/product/:id/edit" component={ProductEditView} />
          <Route path="/cart/:id?" component={CartView} />
          <Route path="/signin" component={SigninView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/shipping" component={ShippingView} />
          <Route path="/payment" component={PaymentView} />
          <Route path="/placeorder" component={OrderView} />
          <Route path="/order/:id" component={OrderDetailsView} />
          <Route path="/orderhistory" component={OrderHistoryView} />
          <PrivateRoute path="/profile" component={ProfileView} />
          <AdminRoute path="/productlist" component={ProductListView} />
        </main>
        <footer className="row center">&#169;2020 All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;