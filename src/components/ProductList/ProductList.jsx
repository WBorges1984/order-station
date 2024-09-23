import React, { useState, useEffect } from 'react';

const ProductList = ({ onAddProduct }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id}>
          <span>{product.name} - ${product.price}</span>
          <button onClick={() => onAddProduct(product)}>Add</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
