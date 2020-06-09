import React from 'react';
import './App.css';
const ProductCart = (cartId, cartTitle, cartPrice) => {
  return (
    <div key={cartId}>
      <h2>{cartTitle}</h2>
      <h3>Price:{cartPrice}$</h3>
      <h2>{cartTitle} is added to cart</h2>
    </div>
  );
};
export default ProductCart;
