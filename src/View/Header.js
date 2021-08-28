import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {

    return <nav>
        <NavLink exact to='/' className='home'>Home</NavLink>
        <NavLink to='/about' className='about'>About</NavLink>
        <NavLink to='/work' className='work'>Work</NavLink>
        <NavLink to='/blog' className='blog'>Blog</NavLink>
        <hr />
    </nav>;

};

export default Header;
