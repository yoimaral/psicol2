import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateView from "../views/Profesores/CreateView.vue";
import IndexView from "../views/Profesores/IndexView.vue";
import EditView from "../views/Profesores/EditView.vue";

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: "/estudiantes",
      name: "estudiantesIndex",
      component: () => import("../views/Estudiantes/IndexView.vue"),
    },
    {
      path: "/estudiantes/create",
      name: "estudiantesCreate",
      component: () => import("../views/Estudiantes/CreateView.vue"),
    },
    {
      path: "/estudiantes/:id/Edit",
      name: "estudiantesEdit",
      component: () => import("../views/Estudiantes/EditView.vue"),
      props: true,
    },

    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/profesores",
      name: "profesoresIndex",
      component: () => import("../views/Profesores/IndexView.vue"),
    },
    {
      path: "/profesores/create",
      name: "Profesores/Create",
      component: () => import("../views/Profesores/CreateView.vue"),
    },
    {
      path: "/profesores/:id/Edit",
      name: "profesoresEdit",
      component: () => import("../views/Profesores/EditView.vue"),
    },

    {
      path: "/asignaturas",
      name: "asignaturasIndex",
      component: () => import("../views/Asignaturas/IndexView.vue"),
    },
    {
      path: "/asignaturas/create",
      name: "asignaturasCreate",
      component: () => import("../views/Asignaturas/CreateView.vue"),
    },
    {
      path: "/asignaturas/:id/Edit",
      name: "asignaturasEdit",
      component: () => import("../views/Asignaturas/EditView.vue"),
      props: true,
    },
  ],
});

export default router;
