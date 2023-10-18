import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateView from "../views/Profesores/CreateView.vue";
import IndexView from "../views/Profesores/IndexView.vue";
import EditView from "../views/Profesores/EditView.vue";

const routes = [
  {
    path: "/estudiantes",
    name: "estudiantesIndex",
    component: () => import("../views/estudiantes/IndexView.vue"),
  },
  {
    path: "/estudiantes/create",
    name: "estudiantesCreate",
    component: () => import("../views/estudiantes/CreateView.vue"),
  },
  {
    path: "/estudiantes/:id/Edit",
    name: "estudiantesEdit",
    component: () => import("../views/estudiantes/EditView.vue"),
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
    component: () => import("../views/asignaturas/IndexView.vue"),
  },
  {
    path: "/asignaturas/create",
    name: "asignaturasCreate",
    component: () => import("../views/asignaturas/CreateView.vue"),
  },
  {
    path: "/asignaturas/:id/Edit",
    name: "asignaturasEdit",
    component: () => import("../views/asignaturas/EditView.vue"),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
