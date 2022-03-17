import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Work from './views/Work.vue';
import Blog from './views/Blog.vue';
import PostPage from './views/PostPage.vue';

const titlify = pageName => `Will Umstead - ${ pageName }`;

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            title: titlify('Home')
        }
    },
    {
        path: '/about',
        component: About,
        meta: {
            title: titlify('About')
        }
    },
    {
        path: '/work',
        component: Work,
        meta: {
            title: titlify('Work')
        }
    },
    {
        path: '/blog',
        component: Blog,
        meta: {
            title: titlify('Blog')
        }
    },
    {
        path: '/blog/post/:id',
        component: PostPage
    }
];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    linkExactActiveClass: 'exact',
    routes,
    scrollBehavior: (to, from, savedPosition) => savedPosition ? savedPosition :
        to.hash ? { selector: to.hash, behavior: 'smooth' } :
            { top: 0, behavior: 'smooth' }
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title ? to.meta.title : 'Will Umstead';
    next();
});

export default router;
