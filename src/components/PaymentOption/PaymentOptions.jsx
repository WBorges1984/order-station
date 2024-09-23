import React from 'react';

const PaymentOptions = ({ onPaymentChange }) => {
  return (
    <div>
      <h2>Payment Method</h2>
      <select onChange={e => onPaymentChange(e.target.value)}>
        <option value="Credit Card">Credit Card</option>
        <option value="Cash">Cash</option>
      </select>
    </div>
  );
};

export default PaymentOptions;
