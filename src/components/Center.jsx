import React, { useState, useEffect } from 'react';
import './Satti.css';

const Center = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div >
      {/* <select style={{ width: '100px' }}> */}
      
        {products.map(product => (

          <li key={product.id} value={product.title}>
            {product.title}
          </li>
        ))}
      {/* </select> */}
    </div>
  );
}

export default Center;
