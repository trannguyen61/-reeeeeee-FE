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
    component: () => 
      {
        //try using namespace on modules
        //with mapactions like dis mapActions("namespace", ["actionMethod"])
        //or mapActions({'increment': 'namespace/actionMethod'})
        const role = store.getters.getRole
        if (role === 'doctor') return import(/* webpackChunkName: "formAccept" */'../views/FormAccept.vue')
        else return import(/* webpackChunkName: "form" */'../views/Form.vue')  
      },
    beforeEnter: (to, from, next) => {
      if (store.getters.getToken) next()
      else next({name: 'Home', query: { showLogin: true }})
    }
  },
  {
    path: '/prescriptions',
    name: 'Prescriptions',
    component: () => {
      if (store.getters.getRole === 'doctor') return import(/* webpackChunkName: "prescriptionMaker" */'../views/PrescriptionMaker.vue')
      else return import(/* webpackChunkName: "prescriptions" */'../views/Prescriptions.vue')

    },
    beforeEnter: (to, from, next) => {
      if (store.getters.getToken) next()
      else next({name: 'Home', query: { showLogin: true }})
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
