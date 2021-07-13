import React from 'react';
import logo from '../images/gameon.png';
import search from '../images/search.png';
import cart from '../images/cart.png'

export default function Header() {
    return (
        <nav className="header">
            
                <img className="logo" src={logo} alt="Logo" />
            
            <ul>
                <li>Home</li>
                <li>Collection</li>
                <li>Contact</li>
            </ul>
            <div className="search">
            <label for="site-search">Search:</label>
<input type="search" id="site-search" name="q"
       aria-label="Search"></input>
<button><img className="icon" src={search} alt="Search" /></button>                
                <img className="icon" src={cart} alt="Cart" />
                
            </div>
        </nav>
    )
}