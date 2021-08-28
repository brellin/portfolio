import React, { useState } from 'react';
import { Route, NavLink } from 'react-router-dom';

import GitHub from 'react-github-calendar';
import projects from './projects';
import './Work.scss';

const Work = props => {

    return <div className="Work">
        <div className="Buttons">
            <NavLink exact to='/work'>Projects</NavLink>
            <NavLink to='/work/activity'>Activity</NavLink>
        </div>
        <Route
            exact path='/work'
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
        <Route path='/work/activity' component={ Activity } />
    </div>;

};

const Activity = _ => {
    return <>
        <h2>WakaTime</h2>
        <figure><embed src="https://wakatime.com/share/@brellin/f844d8ee-85dc-4ba1-b3e1-4277288ef657.svg"></embed></figure>

        <h2>GitHub</h2>
        <GitHub
            username='brellin'
            theme={ {
                background: 'none',
                text: '#03D4FE',
                grade4: '#03D4FE',
                grade3: '#055',
                grade2: '#099',
                grade1: '#001a1a',
                grade0: 'none',
            } }
        />
    </>;
};

export default Work;
