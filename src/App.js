import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import ProductView from './views/ProductView';

function App() {
  return (
    <BrowserRouter>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">folia<i className="fab fa-pagelines"></i></a>
          </div>
          <div id="links">
            <a href="/cart">Cart</a>
            <a href="/signin">Sign In</a>
          </div>
        </header>
        <main>
          <Route exact path="/" component={HomeView}></Route>
          <Route path="/product/:id" component={ProductView}></Route>
        </main>
        <footer className="row center">&#169;2020 All rights reserved</footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
