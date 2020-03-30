import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home"

Vue.use(VueRouter);
//set up quyen` doctor o BeforeEnter hook
//if store.doctor => import component doctor

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
      import(/* webpackChunkName: "signup" */ "../views/Signup.vue")
  },
  {
    path: "/form",
    name: "Form",
    component: () => 
      import(/* webpackChunkName: "form" */'../views/Form.vue')
  },
  {
    path: '/prescriptions',
    name: 'Prescriptions',
    component: () =>
      import(/* webpackChunkName: "prescriptions" */'../views/Prescriptions.vue')
  }
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue")
//   }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
