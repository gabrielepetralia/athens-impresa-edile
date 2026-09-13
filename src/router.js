import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue'
import Error404 from './pages/Error404.vue'
import ProjectDetails from './pages/ProjectDetails.vue'
import Projects from './pages/Projects.vue'

const router = createRouter({

    history: createWebHistory(),
    linkExactActiveClass: 'active',

    routes:[
        {
            path: '/',
            name: 'home',
            component: Home,
        },

        {
            path: '/progetti',
            name: 'progetti',
            component: Projects,
        },

        {
            path: '/progetti/:slug',
            name: 'project-details',
            component: ProjectDetails,
        },

        {
            path: '/:pathMatch(.*)*',
            component: Error404,
        }
    ]
});

export { router }