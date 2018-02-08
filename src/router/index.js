import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const _import_ = file => () => import('views/' + file + '.vue')

export const constantRouterMap = [
    { 
        path: '/', 
        name: '首页', 
        component: _import_('Layout/index'),
        redirect: '/home',
        icon: 'homel',
        children: [
            { path: 'home', component: _import_('Home/index'), name: '首页' }
        ]
    },
    { 
        path: '/components', 
        name: '组件', 
        component: _import_('Layout/index'),
        redirect: '/markdown',
        icon: '-fuzhizujian',
        dropdown: true,
        children: [
            { path: 'dialog', component: _import_('components/Dialog/index'), name: 'Dialog' },
            { path: 'loading', component: _import_('components/Loading/index'), name: 'Loading' },
            { path: 'markdown', component: _import_('components/Markdown/index'), name: 'Markdown' },
            { path: 'github', component: _import_('components/Github/index'), name: 'Github' },
            { path: 'icon-svg', component: _import_('components/Icon-svg/index'), name: 'Icon-svg' },
            { path: 'switch', component: _import_('components/Switch/index'), name: 'Switch' },
            { path: 'tooltip', component: _import_('components/Tooltip/index'), name: 'Tooltip' },
        ]
    }
]
export const asyncRouterMap = [

]

export const router = new Router({
    // mode: 'history',
    routes: constantRouterMap
})

