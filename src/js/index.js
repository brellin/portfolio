import { Router } from './classes/index.js';
import Home from './views/Home.js';

const root = document.querySelector('.root');
const nav = document.querySelector('nav');
const display = document.querySelector('section.display');

const routes = [
    {
        path: '/',
        title: 'Home',
        view: Home
    }
];

const router = new Router(root, nav, display, routes);

router.nav.appendChild(document.createElement('hr'));
