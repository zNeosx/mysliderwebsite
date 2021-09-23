import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>

            <div className="nav-logo">
                <a href='/'>Slider</a>
            </div>

            <div className="nav-ul">
                <Link exact to="/" className="nav-link">Home</Link>
                <Link exact to="/about" className="nav-link">About</Link>
            </div>

        </div>
    );
};

export default Navigation;