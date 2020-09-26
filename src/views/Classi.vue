<template>
  <div class="classi">
    <div class="goBack">
      <router-link to="/" id="routerlink">
        <md-icon>arrow_back</md-icon>&nbsp;
        <label>Torna indietro</label>
      </router-link>
    </div>
    <h2 align="center" class="md-scrollbar" id="title">Classi</h2>
    <md-divider></md-divider>
    <div
      class="md-layout md-gutter md-alignment-top-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
    >
      <div v-for="classe in classi" :key="classe.index">
        <router-link :to="{ name: 'classe', params: { id: classe.index } }">
          <md-card md-size-33>
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{ classe.name }}</div>
              </md-card-header-text>

              <md-card-media>
                <img
                  :src="require(`@/assets/classi/icone/${classe.index}.jpeg`)"
                  :alt="classe.index"
                  id="imgClassi"
                />
              </md-card-media>
            </md-card-header>
          </md-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api";

export default {
  data: function () {
    return {
      classi: [],
    };
  },
  created: function () {
    api.getClassi().then((data) => {
      this.classi = data.data.results;
    });
  },
};
</script>

<style lang="scss" scoped>
.md-divider {
  margin-bottom: 10px;
}
.md-card {
  width: 320px;
  height: auto;
  margin: 55px;
  padding: 7.5px;
  border-radius: 5px;
  margin-block-start: 60px;
  background-color: rgba(0, 0, 0, 0.266);
  display: inline-block;
  background-image: url("https://i.imgur.com/GwbOLYX.png");
  background-position: top;
  background-size: cover;
}
#title {
  font-size: 20pt;
  font-weight: bolder;
  text-shadow: 1px 1px 8px #000086;
}
#imgClassi {
  border-radius: 5px;
  width: 80px;
  height: 80px;
}
</style>