import React, { useState } from 'react';
import axios from 'axios';

const OrderBoard = () => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectItem = (item) => {
    setSelectedItems(prevItems => [...prevItems, item]);
  };

  const handleSubmitOrder = () => {
    // Send order to Laravel backend
    axios.post('http://your-laravel-backend/api/orders', { items: selectedItems })
      .then(response => {
        console.log('Order placed successfully:', response.data);
        // Optionally, reset selectedItems state or perform other actions
      })
      .catch(error => console.error('Error placing order:', error));
  };

  return (
    <div className='col-4'>
      <h2>Order Board</h2>
      <ul>
        {selectedItems.map(item => (
          <li key={item.id}>{item.name} - {item.price}</li>
        ))}
      </ul>
      <button onClick={handleSubmitOrder}>Place Order</button>
    </div>
  );
};

export default OrderBoard;
