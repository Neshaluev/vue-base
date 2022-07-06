import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import AuthView from '@/views/AuthView.vue'
import CreatePost from '@/views/CreatePostView.vue'
import UpdatePost from '@/views/UpdatePostView.vue'
import NotFound from '@/views/NotFound.vue'

import store from '@/store'

export const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        // meta: { requiresAuth: true },
    },
    {
        path: '/auth',
        name: 'autheticated',
        component: AuthView,
        meta: { requiresGuest: true },
    },
    {
        path: '/create-posts',
        name: 'create post',
        component: CreatePost,
        meta: { requiresAuth: true },
    },
    {
        path: '/update-posts/:id',
        name: 'update post',
        component: UpdatePost,
        meta: { requiresAuth: true },
        async beforeEnter(to, from, next) {
            // check exist post
            return next()
        },
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not found',
        component: () =>
            import(/* webpackChunkName: "NotFound" */ '@/views/NotFound.vue'),
    },
    {
        path: '/logout',
        name: 'logout',
        component: NotFound,
        async beforeEnter(to, from) {
            await store.dispatch('auth/logout')
            return { name: 'autheticated' }
        },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.afterEach(() => {
    store.dispatch('clearItems', { modules: ['posts'] })
})

router.beforeEach(async (to, from) => {
    console.log('to', to)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (to.meta.requiresAuth && !store.state.auth.isAuth) {
        console.log('Не авторизован')
        return { name: 'SignIn', query: { redirectTo: to.path } }
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    if (to.meta.requiresGuest && store.state.auth.isAuth) {
        console.log('авторизован')
        return { name: 'Home' }
    }
})

export default router
