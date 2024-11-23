import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🚴‍♂️ Onefinnet Assignment </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#bicycles">Bicycles</a></li>
        <li><a href="#accessories">Accessories</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="cart">
        <span>$0.00</span>
        <span>🛒</span>
      </div>
    </nav>
  );
};

export default Navbar;
