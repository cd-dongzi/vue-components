import store from '../store'
import { router } from './index'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css' // Progress 进度条样式

const whiteList = ['/login'];
router.beforeEach((to, from, next) => {
    NProgress.start()
    next()
})
router.afterEach((to, from) => {
    document.title = to.name
    NProgress.done()
})

export default router
