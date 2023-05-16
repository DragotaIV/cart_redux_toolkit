import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { CartContainer } from './components/CartContainer';
import { Modal } from './components/Modal';
import './index.css';
import { NavBar } from './NavBar';
import { calculateTotals, getCartItems } from './feautures/cart/cartSlice';

function App() {
  const { cartItems, isLoading } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  useEffect(() => {
    dispatch(getCartItems());
  }, []);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      {isOpen && <Modal />}
      <NavBar />
      <CartContainer />
    </>
  );
}

export default App;
