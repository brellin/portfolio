import React, { useState } from 'react';
import { Route } from 'react-router-dom';

import projects from './projects';
import './Work.scss';

const Work = props => {

    return <div className="Work">
        <Route
            path='/work'
            component={ _ => projects.map(p => {
                const [ hovered, setHovered ] = useState(false);
                return <div
                    className="Project"
                    style={ {
                        backgroundImage: `linear-gradient(#000000${ hovered ? '80' : 'aa' }, #000000${ hovered ? '80' : 'aa' }), url(${ p.img })`
                    } }
                    onMouseEnter={ _ => setHovered(true) }
                    onMouseLeave={ _ => setHovered(false) }
                    key={ p.title }
                >
                    <h2>{ p.title }</h2>
                    <p onClick={ _ => window.open(p.url) }>
                        { p.description + '\n\n' }
                        <a
                            target='_blank'
                            rel='noopener noreferrer'
                            href={ p.github }
                            onClick={ e => e.stopPropagation() }
                        >Github Repository</a></p>
                </div>;
            }) } />
    </div>;

};

export default Work;
