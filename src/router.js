import Vue from "vue";
import Router from "vue-router";
import Home from "@/views/Home";
import Services from "@/views/Services";
import Works from "@/views/Works";
import Contact from "@/views/Contact";
import Error from "@/views/Error";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/services",
      name: "Services",
      component: Services,
    },
    {
      path: "/works",
      name: "Works",
      component: Works,
    },
    {
      path: "/contact",
      name: "Contact",
      component: Contact,
    },
    {
      path: "*",
      name: "error",
      component: Error,
    },
  ],
});
