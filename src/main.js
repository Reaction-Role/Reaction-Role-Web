// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';

import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

import Buefy from 'buefy';

import fontAwesome from '@fortawesome/fontawesome';
import faSolid from '@fortawesome/fontawesome-free-solid';
import faRegular from '@fortawesome/fontawesome-free-regular';
import faBrands from '@fortawesome/fontawesome-free-brands';

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

fontAwesome.library.add(faSolid);
fontAwesome.library.add(faRegular);
fontAwesome.library.add(faBrands);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>',
});
