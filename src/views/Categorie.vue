<template>
  <div class="categorie">
    <h2 align="center" class="md-scrollbar" id="mainTitle">
      Scopri tutte le funzionalità e i componenti di Dungeons & Dragons
    </h2>
    <md-divider></md-divider>
    <div
      class="md-layout md-gutter md-alignment-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
    >
      <div v-for="categorie in categorie" :key="categorie.nome">
        <router-link :to="categorie.nome" id="routerlink">
          <md-card>
            <md-card-media-cover md-solid>
              <md-card-media md-ratio="4:3">
                <img
                  :src="categorie.immagine"
                  :alt="categorie.nome"
                  id="imgCard"
                />
              </md-card-media>

              <md-card-area>
                <md-card-header>
                  <span class="md-title">{{ categorie.titolo }}</span>
                </md-card-header>
              </md-card-area>
            </md-card-media-cover>
          </md-card>
        </router-link>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.md-card {
  width: 335px;
  height: auto;
  margin: 55px;
  margin-block-start: 80px;
  display: inline-block;
  border-radius: 5px;
}

#routerlink {
  color: whitesmoke;
}
#mainTitle {
  margin-top: 50px;
  font-size: 20pt;
  font-weight: bolder;
  text-shadow: 1px 1px 8px #000086;
  line-height: 26px;
}
#imgCard {
  width: 100%;
  height: 100%;
  border-radius: 5px;
}
</style>

<script>
import dati from "@/dati.js";

export default {
  name: "categorie",
  components: {},
  data() {
    return {
      categorie: dati.categorie,
    };
  },
};
</script>