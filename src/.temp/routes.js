const c1 = () => import(/* webpackChunkName: "page--src--templates--contentful-servicios-vue" */ "/home/uayeb/Escritorio/content-test/src/templates/ContentfulServicios.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--contentful-soluciones-vue" */ "/home/uayeb/Escritorio/content-test/src/templates/ContentfulSoluciones.vue")
const c3 = () => import(/* webpackChunkName: "page--src--templates--contentful-post-vue" */ "/home/uayeb/Escritorio/content-test/src/templates/ContentfulPost.vue")
const c4 = () => import(/* webpackChunkName: "page--src--templates--contentful-fibra-vue" */ "/home/uayeb/Escritorio/content-test/src/templates/ContentfulFibra.vue")
const c5 = () => import(/* webpackChunkName: "page--src--templates--contentful-crc-vue" */ "/home/uayeb/Escritorio/content-test/src/templates/ContentfulCrc.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--servicios-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/Servicios.vue")
const c7 = () => import(/* webpackChunkName: "page--src--pages--soluciones-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/Soluciones.vue")
const c8 = () => import(/* webpackChunkName: "page--src--pages--post-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/Post.vue")
const c9 = () => import(/* webpackChunkName: "page--src--pages--fibras-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/Fibras.vue")
const c10 = () => import(/* webpackChunkName: "page--src--pages--crc-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/Crc.vue")
const c11 = () => import(/* webpackChunkName: "page--src--pages--about-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/About.vue")
const c12 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/home/uayeb/Escritorio/content-test/node_modules/gridsome/app/pages/404.vue")
const c13 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/home/uayeb/Escritorio/content-test/src/pages/Index.vue")

export default [
  {
    path: "/servicios/:slug/",
    component: c1
  },
  {
    path: "/soluciones/:slug/",
    component: c2
  },
  {
    path: "/post/:slug/",
    component: c3
  },
  {
    path: "/fibras/:slug/",
    component: c4
  },
  {
    path: "/crc/:slug/",
    component: c5
  },
  {
    path: "/servicios/",
    component: c6
  },
  {
    path: "/soluciones/",
    component: c7
  },
  {
    path: "/post/",
    component: c8
  },
  {
    path: "/fibras/",
    component: c9
  },
  {
    path: "/crc/",
    component: c10
  },
  {
    path: "/about/",
    component: c11
  },
  {
    name: "404",
    path: "/404/",
    component: c12
  },
  {
    name: "home",
    path: "/",
    component: c13
  },
  {
    name: "*",
    path: "*",
    component: c12
  }
]
