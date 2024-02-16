import React from 'react';
import { Link,useLocation } from 'react-router-dom';

import './navbar.css';

function Navbar(){
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  return (
    <div>
    <nav>
      <Link to= '/' className='logo'>Logo </Link>
      <ul className='Navbar-items'>
        <li className='navbar-item'><a href='#' className='nav-buttons' >Men</a></li>
        <li className='navbar-item'><a href='#' className='nav-buttons'>Women</a></li>
        <li className='navbar-item'><a href='#' className='nav-buttons'>Kids</a></li>
        <li className='navbar-item'><a href='#' className='nav-buttons'>Accessories</a></li>
        <li className='navbar-item'><div class="search-container"><span class="material-symbols-outlined">search</span> <input type="text" placeholder="Search for products,brands and more..." class="search-input"/></div></li>
        <li className='navbar-item'>
            {isLoginPage ? (
              <Link to="/signup" className='nav-buttons'>
                <span className="material-symbols-outlined">person_add</span>
                <p className='nav-button-text'>Signup</p>
              </Link>
            ) : (
              <Link to="/login" className='nav-buttons'>
                <span className="material-symbols-outlined">person</span>
                <p className='nav-button-text'>Login</p>
              </Link>
            )}
          </li>        
          <li className='navbar-item'><a href='#' className='nav-buttons'><span class="material-symbols-outlined">favorite</span><p className='nav-button-text'>Wishlist</p></a></li>
        <li className='navbar-item'><a href='#' className='nav-buttons'><span class="material-symbols-outlined">shopping_cart</span><p className='nav-button-text'>Cart</p></a></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;