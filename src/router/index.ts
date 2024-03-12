import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from '@/pages/Home.vue';
import AddBlog from '@/pages/AddBlog.vue';
import Abulm from '@/pages/Abulm.vue';
import EditBlog from '@/pages/EditBlog.vue';
import ShowTags from '@/pages/ShowTag.vue';
import SingleBlog from '@/pages/SingleBlog.vue';
import SingleTag from '@/pages/SingleTag.vue';



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/add',
        component: AddBlog
    },
    {
        path: '/blog/:id',
        component: SingleBlog
    },
    {
        path: '/edit/:id',
        component: EditBlog,
    },
    {
        path: '/tag/:id',
        component: ShowTags
    },
    {
        path: '/singleTag/:id',
        component: SingleTag
    },
    {
        path: '/ablum',
        component: Abulm
    }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes: routes
});

export default router;
