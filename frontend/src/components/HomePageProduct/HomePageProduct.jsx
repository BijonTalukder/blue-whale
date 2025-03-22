import React from 'react';
import Product from '../product/product';
// import './HomePageProduct.css'; // Import the CSS file

const HomePageProduct = () => {
  return (
    <div className='homepageproduct row'>
        <div className='col-12'>

        <h1 className='product-title'>Our Popular Products</h1>
        </div>
    <div className='col-12'>

    <Product />

    </div>
    </div>
  );
};

export default HomePageProduct;