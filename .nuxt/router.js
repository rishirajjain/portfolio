import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _953c5cda = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _e1700514 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _329ee5b4 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _7bd0bf6e = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _7e30baa7 = () => interopDefault(import('..\\pages\\work\\index.vue' /* webpackChunkName: "pages/work/index" */))
const _1593ce82 = () => interopDefault(import('..\\pages\\blog\\_blogid\\index.vue' /* webpackChunkName: "pages/blog/_blogid/index" */))
const _630522d3 = () => interopDefault(import('..\\pages\\work\\_id\\index.vue' /* webpackChunkName: "pages/work/_id/index" */))
const _55cca750 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _953c5cda,
    name: "about"
  }, {
    path: "/blog",
    component: _e1700514,
    name: "blog"
  }, {
    path: "/contact",
    component: _329ee5b4,
    name: "contact"
  }, {
    path: "/home",
    component: _7bd0bf6e,
    name: "home"
  }, {
    path: "/work",
    component: _7e30baa7,
    name: "work"
  }, {
    path: "/blog/:blogid",
    component: _1593ce82,
    name: "blog-blogid"
  }, {
    path: "/work/:id",
    component: _630522d3,
    name: "work-id"
  }, {
    path: "/",
    component: _55cca750,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
