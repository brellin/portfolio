import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VSensor from 'react-visibility-sensor';

const Footer = props => {

    return <VSensor>
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
    </VSensor>;

};

export default Footer;
