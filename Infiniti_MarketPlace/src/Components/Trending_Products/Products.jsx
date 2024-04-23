import React from 'react';
import { Trending_Products as TrendingProductsComponent } from '../Index';

const TrendingProducts = () => {
  return (
    <div className="col-md-3">
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images.pexels.com/photos/2113994/pexels-photo-2113994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="img-fluid rounded-start product-image"
              alt="Product"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title product-name">
                MENS SEIKO KINETIC TITANIUM 100M WRIST WATCH! No Reserve!
              </h5>
              <p className="card-text">
                <span className="card-price">$18.50</span>
                <span className="card-info">6d 13h 52 sec</span>
              </p>
              <p className="card-shippingCost">+ $11.60 Shipping</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProducts;
