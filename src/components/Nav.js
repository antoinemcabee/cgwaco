import React from 'react';
import '../styles/nav.css'

export default function Nav () {
    return(
        <nav className='custom-nav'>
            <ul className='nav-list'>
                <li>
                    <a className='navItem' href='#'>Order Ahead</a>
                </li>
                <li>
                    <a className='navItem' href='#'>About Us</a>
                    <div>
                        <ul>
                            <li>Menu</li>
                            <li>Staff</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a className='navItem' href='#'>Concerts</a>
                </li>
                <li>
                    <a className='navItem' href='#'>Baylor Blend</a>
                </li>
                <li>
                    <a className='navItem' href='#'>Catering</a>
                </li>
                <li>
                    <a className='navItem' href='#'>Venue Rentals</a>
                </li>
                <li>
                    <a className='navItem' href='#'>Menu</a>
                </li>
            </ul>
        </nav>
    );
}

