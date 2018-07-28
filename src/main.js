// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import VueAnalytics from 'vue-analytics';

import VueLazyload from 'vue-lazyload';

import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

import Buefy from 'buefy';

import fontAwesome from '@fortawesome/fontawesome';
import faSolid from '@fortawesome/fontawesome-free-solid';
import faRegular from '@fortawesome/fontawesome-free-regular';
import faBrands from '@fortawesome/fontawesome-free-brands';

import 'animate.css/animate.min.css';

import Trend from 'vuetrend';

import App from './App';
import router from './router';

Vue.config.productionTip = false;

Raven
    .config('https://bc549299ee494dbdbd5264a585498ebb@sentry.io/1214479')
    .addPlugin(RavenVue, Vue)
    .install();

Vue.use(Buefy, {
    defaultIconPack: 'fas',
});

Vue.use(Trend);

fontAwesome.library.add(faSolid);
fontAwesome.library.add(faRegular);
fontAwesome.library.add(faBrands);

Vue.use(VueAnalytics, {
    id: 'UA-68577666-6',
    router,
});

Vue.use(VueLazyload);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
