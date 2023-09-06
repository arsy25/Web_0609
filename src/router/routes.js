const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
      },
      {
        path: "author",
        name: "author",
        component: () => import("pages/AuthorProfile.vue"),
      },
      {
        path: "qna",
        name: "qna",
        component: () => import("pages/QnA.vue"),
      },
      {
        path: "artikel_lain",
        name: "artikellain",
        component: () => import("pages/ArtikelLain.vue"),
      },
      {
        path: "buat_artikel",
        name: "buatartikel",
        component: () => import("pages/BuatArtikel.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
