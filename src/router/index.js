import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/components/Home';

import Documentation from '@/components/Documentation';
import Prerequisite from '@/components/Documentation/Overview/Prerequisite';
import ParameterTypes from '@/components/Documentation/Overview/ParameterTypes';
import FindMessageID from '@/components/Documentation/Overview/FindMessageID';
import MessageEmbed from '@/components/Documentation/Commands/MessageEmbed';
import ReactionRole from '@/components/Documentation/Commands/ReactionRole';
import GroupLock from '@/components/Documentation/Commands/GroupLock';
import Utilities from '@/components/Documentation/Commands/Utilities';

import FAQ from '@/components/FAQ/FAQ';

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
                    path: 'FindMessageID',
                    component: FindMessageID,
                },
                {
                    path: 'MessageEmbed',
                    component: MessageEmbed,
                },
                {
                    path: 'ReactionRole',
                    component: ReactionRole,
                },
                {
                    path: 'GroupLock',
                    component: GroupLock,
                },
                {
                    path: 'Utilities',
                    component: Utilities,
                },
            ],
        },
        {
            path: '/FAQ',
            name: 'FAQ',
            component: FAQ,
        },
    ],
    scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash,
            };
        }

        if (savedPosition) {
            return savedPosition;
        }

        return false;
    },
});
