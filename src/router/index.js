import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';
import Documentation from '@/components/Documentation';
import FAQ from '@/components/FAQ';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home,
        },
        {
            path: '/documentation',
            name: 'Documentation',
            component: Documentation,
        },
        {
            path: '/faq',
            name: 'FAQ',
            component: FAQ,
        },
    ],
});
