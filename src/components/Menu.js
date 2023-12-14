import React from 'react';
import formatRupiah from '../extensions/ConvertRupiah';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

const NumberToRupiah = ({ amount }) => {
  const formattedAmount = formatRupiah(amount);

  return (
    <span style={{ whiteSpace: 'nowrap' }}>
      {formattedAmount}
    </span>
  );
};

const Menu = ({ menuItems, onSelectItem }) => {
  return (
    <div>
      <h2>Menu</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {menuItems.map(item => (
          <li key={item.id} style={{ marginBottom: '20px' }}>
            <img
              src={`/img/${item.foto}`}  // Provide the path to your image
              alt={item.name}
              style={{ width: '100px', height: '100px', marginRight: '20px' }}
            />
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div>
                <h3>{item.name}</h3>
                <p>
                  <NumberToRupiah amount={item.harga} />
                </p>
              </div>
              <Badge as={Button} onClick={() => onSelectItem(item)}>Add to Order</Badge>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
