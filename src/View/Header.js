import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = props => {

    return <nav>
        <NavLink exact to='/' className='home'>Home</NavLink>
        <NavLink to='/about' className='about'>About</NavLink>
        <NavLink to='/work' className='work'>Work</NavLink>
        <a
            href="https://docs.google.com/document/d/1jRMkE040orW6gBoYssTHJ7g8s8VN3OPtYTF-fz_EYII/edit?usp=sharing"
            target='_blank'
            rel='noopener noreferrer'
        >Resume</a>
        <hr />
    </nav>;

};

export default Header;
