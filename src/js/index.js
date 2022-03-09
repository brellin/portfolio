import { Router } from './classes/index.js';
import Home from './views/Home.js';
import About from './views/About.js';
import Work from './views/Work.js';

const isInView = el => el.getBoundingClientRect().top <= window.innerHeight;

const root = document.querySelector('.root');
const nav = document.querySelector('nav');
const display = document.querySelector('section.display');
const footer = document.querySelector('footer');

const routes = [
    {
        path: '/',
        title: 'Home',
        view: Home
    },
    {
        path: '/about',
        title: 'About',
        view: About
    },
    {
        path: '/work',
        title: 'Work',
        view: Work,
        subRoutes: [
            {
                path: '/work/activity',
                title: 'Activity',
                view: Work,
                display: true
            }
        ]
    },
    {
        path: '/blog',
        title: 'Blog',
        view: About,
        subRoutes: [
            {
                path: '/blog/posts',
                title: 'Posts',
                view: Work,
                display: true
            },
            {
                path: '/blog/posts/:id',
                title: 'Post',
                view: Work,
                display: false
            },
        ]
    },
];

const router = new Router(root, nav, display, routes, {
    loadScript: _ => {
        if (isInView(footer)) footer.classList.add('in-view');
        else footer.classList.remove('in-view');
    }
});

router.nav.appendChild(document.createElement('hr'));

window.addEventListener('scroll', _ => {
    if (isInView(footer)) footer.classList.add('in-view');
    else footer.classList.remove('in-view');
});
