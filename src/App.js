import React from 'react';
import { NavLink } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VSensor from 'react-visibility-sensor';

import Routes from './Routes';
import './App.scss';

library.add(fab, faAt);

const App = _ => {

  return <div className="App">
    <nav>
      <NavLink exact to='/' className='home'>Home</NavLink>
      <NavLink to='/about' className='about'>About</NavLink>
      <NavLink to='/work' className='work'>Work</NavLink>
      <a
        href="https://docs.google.com/document/d/1jRMkE040orW6gBoYssTHJ7g8s8VN3OPtYTF-fz_EYII/edit?usp=sharing"
        target='_blank'
        rel='noopener noreferrer'
      >Resume</a>
      <hr />
    </nav>

    <Routes />

    <VSensor>
      { ({ isVisible }) =>
        <footer className={ isVisible ? 'visible' : 'invisible' }>
          <h2>Get in touch</h2>

          <div>
            <FontAwesomeIcon
              icon={ [ 'fab', 'github' ] }
              className='Link'
              onClick={ () => window.open('https://github.com/brellin') }
            />
          </div>

          <div>
            <FontAwesomeIcon
              icon={ [ 'fab', 'linkedin' ] }
              className='Link'
              onClick={ () => window.open('https://linkedin.com/in/brellin') }
            />
          </div>

          <div>
            <FontAwesomeIcon
              icon='at'
              className='Link'
              onClick={ () => window.location = 'mailto: william.c.umstead@gmail.com' }
            />
          </div>
        </footer> }
    </VSensor>

  </div>;

};

export default App;
