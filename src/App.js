import React from 'react';
import data from './data';

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/" >folia<i className="fab fa-pagelines"></i></a>
        </div>
        <div id="links">
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>
      <main>
        <div className="row center">
          {
            data.products.map((product) => {
              return (
                <div key={product._id} className="card">
                  <a href={`/product/${product._id}`}>
                    <img className="medium" src={product.image} alt={product.name} />
                  </a>
                  <div className="card-body">
                    <div className="card-title">
                      <a href="product.html">
                        <h2>{product.name}</h2>
                      </a>
                      <div className="price">${product.price}</div>
                    </div>
                    <div className="rating">
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                      <span><i className="fa fa-star"></i></span>
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </main>
      <footer className="row center">&#169;2020 All rights reserved</footer>
    </div>
  );
}

export default App;
