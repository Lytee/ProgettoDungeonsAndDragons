<template>
  <div class="razze">
    <div class="goBack">
      <router-link to="/" id="routerlink">
        <md-icon>arrow_back</md-icon>&nbsp;
        <label>Torna indietro</label>
      </router-link>
    </div>
    <h2 align="center" id="title">Razze</h2>
    <md-divider></md-divider>
    <div
      class="md-layout md-gutter md-alignment-top-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
    >
      <div v-for="razza in razze" :key="razza.index">
        <router-link :to="{ name: 'razza', params: { id: razza.index } }">
          <md-card md-size-66 md-with-hover>
            <md-ripple>
              <md-card-header>
                <md-card-header-text>
                  <div class="md-title">{{ razza.name }}</div>
                </md-card-header-text>

                <md-card-media md-medium>
                  <img
                    :src="require(`@/assets/razze/immagini/${razza.index}.png`)"
                    :alt="razza.index"
                  />
                </md-card-media>
              </md-card-header>
            </md-ripple>
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
      razze: [],
    };
  },
  created: function () {
    api.getRazze().then((data) => {
      this.razze = data.data.results;
    });
  },
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  height: auto;
  margin: 55px;
  border-radius: 5px;
  padding: 5px;
  margin-block-start: 60px;
  background-color: rgba(0, 0, 0, 0.266);
  display: inline-block;
  background-image: url("https://www.picgifs.com/wallpapers/wallpapers/red/wallpapers-red-684342.jpg");
  background-size: cover;
}
#title {
  font-size: 20pt;
  font-weight: bolder;
  text-shadow: 1px 1px 8px #000086;
}
.md-title {
  text-shadow: 1px 1px 8px #000086;
  font-weight: bold;
}
</style>