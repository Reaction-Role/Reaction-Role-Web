import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';

import Documentation from '@/components/Documentation';
import Prerequisite from '@/components/Documentation/Overview/Prerequisite';
import ParameterTypes from '@/components/Documentation/Overview/ParameterTypes';
import MessageEmbed from '@/components/Documentation/Commands/MessageEmbed';

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
            path: '/Documentation',
            component: Documentation,
            children: [
                {
                    path: '',
                    component: Prerequisite,
                },
                {
                    path: 'ParameterTypes',
                    component: ParameterTypes,
                },
                {
                    path: 'MessageEmbed',
                    component: MessageEmbed,
                },
            ],
        },
        {
            path: '/FAQ',
            name: 'FAQ',
            component: FAQ,
        },
    ],
    // eslint-disable-next-line
    scrollBehavior(to /* , from, savedPosition */) {
        if (to.hash) {
            return {
                selector: to.hash,
            };
        }
    },
});
