import React from 'react';
import '../styles/Header.css'; // Make sure to create and style this CSS file

const Header = () => {
  return (
    <div className="header">
      <div className="header-overlay">
        <h1>Loan</h1>
        <p>Financing made possible for every car buyer</p>
        <div className="header-benefits">
          <span>✓ Completely Online</span>
          <span>✓ Same-day Approval</span>
          <span>✓ Attractive EMIs</span>
          <span>✓ Hassle-free Process</span>
        </div>
        <div className="header-check-eligibility">
          <button>Check eligibility</button>
          <p>Interest rate starting from 11.49% only</p>
          <p>Don't worry! It'll not affect your credit score</p>
        </div>
        
      </div>
    </div>
  );
};

export default Header;
