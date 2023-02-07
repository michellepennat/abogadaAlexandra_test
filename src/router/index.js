import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login/Login.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/",
    name: "home",
    component: Dashboard,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // redirect to login page if not logged in and trying to access a restricted page
  const publicPages = ["/login"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("token");
  if (loggedIn && !authRequired) {
    return next("/");
  }
  if (authRequired && !loggedIn) {
    return next("/login");
  }

  next();
});

export default router;
