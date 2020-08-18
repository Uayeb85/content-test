const c1 = () => import(/* webpackChunkName: "page--src--templates--contentful-servicios-vue" */ "/home/uayeb/Escritorio/content-test/src/templates/ContentfulServicios.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--contentful-fibra-vue" */ "/home/uayeb/Escritorio/content-test/src/templates/ContentfulFibra.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--servicios-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/Servicios.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--fibras-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/Fibras.vue")
const c5 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/About.vue")
const c6 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/uayeb/Escritorio/content-test/node_modules/gridsome/app/pages/404.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/Index.vue")

export default [
  {
    path: "/servicios/:slug/",
    component: c1
  },
  {
    path: "/fibras/:slug/",
    component: c2
  },
  {
    path: "/servicios/",
    component: c3
  },
  {
    path: "/fibras/",
    component: c4
  },
  {
    path: "/about/",
    component: c5
  },
  {
    name: "404",
    path: "/404/",
    component: c6
  },
  {
    name: "home",
    path: "/",
    component: c7
  },
  {
    name: "*",
    path: "*",
    component: c6
  }
]
