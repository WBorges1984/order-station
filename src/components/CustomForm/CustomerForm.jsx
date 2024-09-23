import React, { useState } from 'react';

const CustomerForm = ({ onCustomerChange }) => {
  const [customer, setCustomer] = useState({ name: '', email: '' });

  const handleChange = e => {
    const { name, value } = e.target;
    setCustomer(prev => ({ ...prev, [name]: value }));
    onCustomerChange(customer);
  };

  return (
    <div>
      <h2>Customer Information</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={customer.name}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={customer.email}
        onChange={handleChange}
      />
    </div>
  );
};

export default CustomerForm;
