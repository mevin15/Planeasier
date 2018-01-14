import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}

const router = new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

  mode: 'hash',
  scrollBehavior: () => ({ y: 0 }),

  routes: [
    // auth
    { path: '/', redirect: '/login' },
    { path: '/login', component: load('Auth/Login') },
    { path: '/forgetPassword', component: load('Auth/ForgetPassword') },
    { path: '/register', component: load('Auth/Register') },

    { path: '/home', component: load('Menu') },

    // Always leave this last one
    { path: '*', component: load('Error404') } // Not found
  ]
})

router.beforeEach((to, from, next) => {
  // if logged
  // if (to.path !== '/login') {
  //   next('/login')
  // }
  next()
  // else
  // next('/login'),
})
export default router
