import Vue from 'vue'
import VueRouter from 'vue-router'

import VueMoment from 'vue-moment'

import bulma from 'bulma'
import bulmaCalendar from 'bulma-calendar/dist/bulma-calendar.min'

Vue.use(VueRouter)
Vue.use(VueMoment);

import App from './views/App'
import Home from './views/Home'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },

    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});