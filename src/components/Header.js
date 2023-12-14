// Header.js
import React, { useState } from 'react';

const Header = () => {
  const [activePage, setActivePage] = useState('home'); // Initialize with the default active page

  const handlePageChange = (page) => {
    setActivePage(page);
  };

  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">
          Alif's Resturant
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${activePage === 'home' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="/"
                onClick={() => handlePageChange('home')}
              >
                Home
              </a>
            </li>
            <li className={`nav-item ${activePage === 'food' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="/food"
                onClick={() => handlePageChange('food')}
              >
                Food
              </a>
            </li>
            <li className={`nav-item ${activePage === 'Transaksi' ? 'active' : ''}`}>
              <a
                className="nav-link"
                href="/Transaksi"
                onClick={() => handlePageChange('Transaksi')}
              >
                Transaksi
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
