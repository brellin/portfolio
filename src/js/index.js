import { Router } from './classes/index.js';
import Home from './views/Home.js';
import About from './views/About.js';

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
];

const router = new Router(root, nav, display, routes);

router.nav.appendChild(document.createElement('hr'));

window.addEventListener('scroll', _ => {
    if (isInView(footer)) footer.classList.add('in-view');
    else footer.classList.remove('in-view');
});

if (isInView(footer)) footer.classList.add('in-view');
