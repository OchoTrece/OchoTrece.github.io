import React from 'react';
import './Navbar.css';
import { Link, useLocation } from 'react-router-dom';
import goldLogo from './gold-logo.png'


function Navbar() {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    return (
        <nav>
            <ul>
                <li><Link to="/" className={isActive('/') ? 'active' : ''}>
                    <img src={goldLogo}  className='nav-image'></img>
                    </Link>
                </li>

                <li><Link to="/about" className={isActive('/about') ? 'active' : ''}>about</Link></li>

                <li><Link to="/contact" className={isActive('/contact') ? 'active' : ''}>contact</Link></li>
            </ul>
        </nav>
    );
}


export default Navbar;