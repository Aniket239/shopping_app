import React from 'react';
import './navbar.css';

function Navbar(){
  return (
    <div>
    <nav>
      <div className='logo'>Logo</div>
      <ul className='Navbar-items'>
        <li className='navbar-item'><a href='#'>Men</a></li>
        <li className='navbar-item'><a href='#'>Women</a></li>
        <li className='navbar-item'><a href='#'>Kids</a></li>
        <li className='navbar-item'><a href='#'>Accessories</a></li>
        <li className='navbar-item'><div class="search-container"> <span class="material-symbols-outlined">search</span> <input type="text" placeholder="Search for products,brands and more..." class="search-input"/></div></li>
        <li className='navbar-item'><a href='#'><span class="material-symbols-outlined">person</span>Login</a></li>
        <li className='navbar-item'><a href='#'><span class="material-symbols-outlined">favorite</span>Wishlist</a></li>
        <li className='navbar-item'><a href='#'><span class="material-symbols-outlined">shopping_cart</span>Cart</a></li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;