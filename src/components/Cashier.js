import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Menu from './Menu';
import OrderBoard from './OrderBoard';

const Cashier = () => {
  const [customerName, setCustomerName] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    // Fetch menu items from the server
    axios.get('http://localhost:8000/Makanan')
      .then(response => setMenuItems(response.data))
      .catch(error => console.error('Error fetching menu:', error));
  }, []);

  const handleMenuItemSelect = (selectedItem) => {
    setOrders([...orders, selectedItem]);
    setTotalAmount(totalAmount + selectedItem.price);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Send order to the server
    axios.post('http://localhost:8000/Transaksi', { customer_name: customerName, total_amount: totalAmount, items: orders })
      .then(response => {
        setOrders([]);
        setCustomerName('');
        setTotalAmount(0);
      })
      .catch(error => console.error('Error creating order:', error));
  };

  return (
    <div className='col-4'>
      <h1>Cashier</h1>
      <form onSubmit={handleSubmit} className='row'>
        <label>Customer Name:
          <input type="text" value={customerName} onChange={(e) => setCustomerName(e.target.value)} />
        </label>
        <Menu menuItems={menuItems} onSelectItem={handleMenuItemSelect} />
        <h2>Order Summary</h2>
        <ul>
          {orders.map((order, index) => (
            <li key={index}>{order.name} - ${order.harga}</li>
          ))}
        </ul>
        <p>Total Amount: ${totalAmount}</p>
        <button type="submit">Submit Order</button>
        <OrderBoard />
      </form>
    </div>
  );
};

export default Cashier;
