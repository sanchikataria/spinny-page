import React from 'react';
import '../styles/Navbar.css';
import spinnyLogo from '../assets/spinnyLogo.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={spinnyLogo} alt="Spinny Logo" />
        <span></span>
      </div>
      <div className="navbar-location">
        <span>Jaipur</span>
        <span className="dropdown-arrow">▼</span>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search by make or model" />
        <button>Q</button>
      </div>
      <div className="navbar-links">
        <a href="#">Buy Car</a>
        <a href="#">Sell Car</a>
        <a href="#">More ▼</a>
      </div>
      <div className="navbar-actions">
        <div className="shortlisted">
          <span>♡</span>
          <span>Shortlisted</span>
        </div>
        <div className="account">
          <span>☺</span>
          <span>Account ▼</span>
        </div>
        <div className="contact">
          <span>Call us at</span>
          <br />
          <span>727-727-7275</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
