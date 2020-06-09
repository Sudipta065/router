import React from 'react';
import './App.css';
const SelectedProduct = (id, title, image, price, info) => {
  return (
    <div className='modal' key={id}>
      <img className='image-mod' alt={title} src={image}></img>
      <h2>{title}</h2>
      <h3>Price:{price}$</h3>
      <p>Specifications:{info}</p>
    </div>
  );
};
export default SelectedProduct;
