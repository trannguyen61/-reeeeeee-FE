import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home"

import store from '../store/index'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/signup",
    name: "Signup",
    component: () => 
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue"),
    beforeEnter: (to, from, next) => {
      const auth =  store.getters.getToken
        if (!auth) next()
        else next({name: 'Home'})
    }
  
  },
  {
    path: "/form",
    name: "Form",
    beforeEnter: (to, from, next) => {
      if (store.getters.getToken && store.getters.getRole === 'patient') next({name: 'User-Form'})
      else if (store.getters.getToken && store.getters.getRole === 'doctor') next({name: 'Doctor-Form'})
      else next({name: 'Home', query: { showLogin: true }})
    }
  },
  {
    path: '/prescriptions',
    name: 'Prescriptions',
    beforeEnter: (to, from, next) => {
      if (store.getters.getToken && store.getters.getRole === 'patient') next({name: 'User-Pres'})
      else if (store.getters.getToken && store.getters.getRole === 'doctor') next({name: 'Doctor-Pres'})
      else next({name: 'Home', query: { showLogin: true }})
    }
  },
  ///////////
  //User Routes
  //////////
  {
    path: '/user/form',
    name: 'User-Form',
    component: () => import(/* webpackChunkName: "form" */'../views/Form.vue')
  },
  {
    path: '/user/prescription',
    name: 'User-Pres',
    component: () => import(/* webpackChunkName: "prescriptions" */'../views/Prescriptions.vue')
  },
  ///////////
  //Doctor Routes
  ///////////
  {
    path: '/doctor/form',
    name: 'Doctor-Form',
    component: () => import(/* webpackChunkName: "formAccept" */'../views/FormAccept.vue')
  },
  {
    path: '/doctor/prescription',
    name: 'Doctor-Pres',
    component: () => import(/* webpackChunkName: "prescriptionMaker" */'../views/PrescriptionMaker.vue')
  },
  
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
