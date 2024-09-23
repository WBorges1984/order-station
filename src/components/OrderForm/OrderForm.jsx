import React, { useState } from 'react';
import ProductList from '../ProductList/ProductList';
import CustomerForm from '../CustomForm/CustomerForm';
import PaymentOptions from '../PaymentOption/PaymentOptions';

const OrderForm = () => {
  const [order, setOrder] = useState({ products: [], customer: {}, payment: '' });

  const addProductToOrder = product => {
    setOrder(prev => ({ ...prev, products: [...prev.products, product] }));
  };

  const handleCustomerChange = customer => {
    setOrder(prev => ({ ...prev, customer }));
  };

  const handlePaymentChange = payment => {
    setOrder(prev => ({ ...prev, payment }));
  };

  const handleSubmit = async () => {
    const response = await fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(order),
    });
    if (response.ok) {
      alert('Order submitted successfully!');
    }
  };

  return (
    <div>
      <h1>Order Station</h1>
      <ProductList onAddProduct={addProductToOrder} />
      <CustomerForm onCustomerChange={handleCustomerChange} />
      <PaymentOptions onPaymentChange={handlePaymentChange} />
      <button onClick={handleSubmit}>Submit Order</button>
    </div>
  );
};

export default OrderForm;
