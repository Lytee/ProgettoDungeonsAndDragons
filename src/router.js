import Vue from "vue";
import Router from "vue-router";
import Categorie from "./views/Categorie.vue";
import Personaggi from "./views/Personaggi.vue";
import Classi from "./views/Classi.vue";
import CreaPersonaggio from "./views/CreaPersonaggio.vue";
import Classe from "./views/Classe.vue";
import ImieiPersonaggi from "./views/ImieiPersonaggi.vue";
import Razze from "./views/Razze.vue";
import Razza from "./views/Razza.vue";
import Equipaggiamenti from "./views/Equipaggiamenti.vue";
import Equipaggiamento from "./views/Equipaggiamento.vue";
import Incantesimi from "./views/Incantesimi.vue";
import Incantesimo from "./views/Incantesimo.vue";
import Mostri from "./views/Mostri.vue";
import Mostro from "./views/Mostro.vue";

Vue.use(Router);

let router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "categorie",
      component: Categorie
    },
    {
      path: "/personaggi",
      name: "personaggi",
      component: Personaggi
    },
    {
      path: "/classi",
      name: "classi",
      component: Classi
    },
    {
      path: "/creapersonaggio",
      name: "creapersonaggio",
      component: CreaPersonaggio
    },
    {
      path: "/classe/:id",
      name: "classe",
      component: Classe
    },
    {
      path: "/imieipersonaggi",
      name: "imieipersonaggi",
      component: ImieiPersonaggi
    },
    {
      path: "/razze",
      name: "razze",
      component: Razze
    },
    {
      path: "/razza/:id",
      name: "razza",
      component: Razza
    },
    {
      path: "/equipaggiamenti",
      name: "equipaggiamenti",
      component: Equipaggiamenti
    },
    {
      path: "/equipaggiamento/:id",
      name: "equipment",
      component: Equipaggiamento
    },
    {
      path: "/incantesimi",
      name: "incantesimi",
      component: Incantesimi
    },
    {
      path: "/incantesimo/:id",
      name: "spells",
      component: Incantesimo
    },
    {
      path: "/mostri/",
      name: "mostri",
      component: Mostri
    },
    {
      path: "/mostro/:id",
      name: "monsters",
      component: Mostro
    }
  ]
});

export default router;
