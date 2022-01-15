import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-dark">
        <div class="navbar">
          <a  href="/">Home</a>
          <a href="/users">Users</a>
          <a href="/transactions">Transactions</a>
        </div>
      </nav>
    );
  }
  
  export default Navbar;