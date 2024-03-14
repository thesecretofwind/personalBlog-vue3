import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from '@/pages/Home.vue';
import AddBlog from '@/pages/AddBlog.vue';
import Abulm from '@/pages/Abulm.vue';
import EditBlog from '@/pages/EditBlog.vue';
import ShowTags from '@/pages/ShowTag.vue';
import SingleBlog from '@/pages/SingleBlog.vue';
import SingleTag from '@/pages/SingleTag.vue';
import BlogList from "@/components/BlogList.vue";



const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Home,
        redirect: '/overview',
        children: [
            {
                path: '/overview',
                name: 'overview',
                component: BlogList
            },
            {
                path: '/add',
                name: 'AddBlog',
                component: AddBlog
            },
            {
                path: '/abulm',
                name: 'Abulm',
                component: Abulm
            },
            {
                path: '/edit/:id',
                name: 'EditBlog',
                component: EditBlog
            },
            {
                path: '/tags',
                name: 'ShowTags',
                component: ShowTags
            },
            {
                path: '/blog/:id',
                name: 'SingleBlog',
                component: SingleBlog
            },
            {
                path: '/tag/:id',
                name: 'SingleTag',
                component: SingleTag
            }
        ]
    },
    // {
    //     path: '/add',
    //     component: AddBlog
    // },
    // {
    //     path: '/blog/:id',
    //     component: SingleBlog
    // },
    // {
    //     path: '/edit/:id',
    //     component: EditBlog,
    // },
    // {
    //     path: '/tag/:id',
    //     component: ShowTags
    // },
    // {
    //     path: '/singleTag/:id',
    //     component: SingleTag
    // },
    // {
    //     path: '/ablum',
    //     component: Abulm
    // }
];

const router = createRouter({
    history: createWebHistory('/'),
    routes: routes
});

export default router;
