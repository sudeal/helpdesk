import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="helpdesk-header">
      <h2>Welcome to the Help Center</h2>
      <h1>How can we help?</h1>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>
    </div>
  );
}

export default Header; 