import React, { useState } from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png';
import cart_icon from '../assets/cart_icon.png';


const Navbar = () => {
    const [menu,setMenu]= useState("shop");
    return(
        <div className='navbar'>
            <div className='logo-icon'>
                <img src={logo} alt='logo'/>
                <p>Shopper</p>
            </div>
            <ul className='nav-menu'>
                <li onClick={() =>{setMenu("shop")}}><Link to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("mens")}}><Link to='/mens'>Mens</Link>{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("womens")}}><Link to='/womens'>Womens</Link>{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={() =>{setMenu("kids")}}><Link to='/kids'>Kids</Link>{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className='nav-login-cart'>
                <button><Link to='/loginsignup'>Login</Link></button>
                <Link to='cart'><img src={cart_icon} alt=''/></Link>
                <div className='nav-cart-count'>0</div>
            </div>

        </div>
    )
}

export default Navbar;
