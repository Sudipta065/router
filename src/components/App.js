import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { storeProducts } from './data';
import './App.css';
import SelectedProduct from './SelectedProduct';
import ProductCart from './ProductCart';
import Modal from 'react-modal';
Modal.setAppElement('#root');

const App = () => {
  const [products, setProducts] = useState(storeProducts);
  const [currentId, setCurrentId] = useState();
  const [currentTitle, setCurrentTitle] = useState();
  const [currentImage, setCurrentImage] = useState();
  const [currentPrice, setCurrentPrice] = useState();
  const [currentInfo, setCurrentInfo] = useState();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [modalIsOpens, setIsOpens] = React.useState(false);
  const [currentCartId, setCurrentCartId] = useState();
  const [currentCartTitle, setCurrentCartTitle] = useState();
  const [currentCartPrice, setCurrentCartPrice] = useState();

  const openModal = () => {
    setIsOpen(true);
  };
  const openModals = () => {
    setIsOpens(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const closeModals = () => {
    setIsOpens(false);
  };

  const handleProductModal = (id, title, image, price, info) => {
    setCurrentId(id);
    setCurrentImage(image);
    setCurrentTitle(title);
    setCurrentPrice(price);
    setCurrentInfo(info);
    openModal();
  };

  const handleProductCart = (cartId, cartTitle, cartPrice) => {
    setCurrentCartId(cartId);
    setCurrentCartTitle(cartTitle);
    setCurrentCartPrice(cartPrice);

    openModals();
  };
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={App} />
        </Switch>
      </BrowserRouter>

      <div className='container'>
        {products.map((product) => (
          <div className='card' key={product.id}>
            <h2>{product.title}</h2>
            <img className='image' alt={product.title} src={product.img}></img>
            <div>Price:{product.price}$</div>
            <button
              className='cart-btn'
              onClick={() =>
                handleProductCart(product.id, product.title, product.price)
              }
            >
              <i className='fas fa-shopping-cart logo-cart'></i>
            </button>

            <button
              onClick={() =>
                handleProductModal(
                  product.id,
                  product.title,
                  product.img,
                  product.price,
                  product.info
                )
              }
            >
              Check Details
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpens}
        onRequestClose={closeModals}
        style={customStyles}
        contentLabel='Example Modal'
      >
        {ProductCart(currentCartId, currentCartTitle, currentCartPrice)}
      </Modal>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <button onClick={closeModal}>x</button>
        {SelectedProduct(
          currentId,
          currentTitle,
          currentImage,
          currentPrice,
          currentInfo
        )}
      </Modal>
    </div>
  );
};

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
export default App;
/**
 <BrowserRouter>
        <Route path='/' exact component={App} />
       
      </BrowserRouter>

         <div>
        <BrowserRouter>
          <div>
            <Route path='/' exact component={App} />
            <Route path='/cart' exact component={SelectedProduct} />
          </div>
        </BrowserRouter>
      </div>
 */
