<template>
  <div class="mostro">
    <div class="goBack">
      <router-link to="/mostri" id="routerlink">
        <md-icon>arrow_back</md-icon>&nbsp;
        <label>Torna indietro</label>
      </router-link>

      <div class="md-layout md-gutter md-alignment-center">
        <md-card
          class="md-accent md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
          <md-card-header>
            <md-card-header-text>
              <div class="md-title" align="left">{{ mostro.name }}</div>
            </md-card-header-text>
          </md-card-header>
          <md-divider></md-divider>
          <br />
          <md-card-media md-medium align="center">
            <img
              :src="require(`@/assets/mostri/categorie/${mostro.type}.jpg`)"
              :alt="mostro.type"
              id="imgMostro"
            />
          </md-card-media>
          <br />
          <div
            class="md-layout md-medium-size-33 md-small-size-50 md-xsmall-size-100"
            align="center"
          >
            <div class="md-layout-item" id="item1">
              <br />
              <div class="md-subhead">Size:</div>
              <div id="under-sub">{{ mostro.size }}</div>
              <br />
              <div class="md-subhead">Type:</div>
              <div id="under-sub">{{ mostro.type }}</div>
              <br />
              <div class="md-subhead">Alignment:</div>
              <div id="under-sub">{{ mostro.alignment }}</div>
              <br />
              <div class="md-subhead">AC:</div>
              <div id="under-sub">{{ mostro.armor_class }}</div>
              <br />
              <div class="md-subhead">HP:</div>
              <div id="under-sub">{{ mostro.hit_points }}</div>
              <br />
              <div class="md-subhead">Hit dice:</div>
              <div id="under-sub">{{ mostro.hit_dice }}</div>
            </div>
            <div class="md-layout-item" id="item2">
              <br />
              <div class="md-subhead">Strength:</div>
              <div id="under-sub">{{ mostro.strength }}</div>
              <br />
              <div class="md-subhead">Dexterity:</div>
              <div id="under-sub">{{ mostro.dexterity }}</div>
              <br />
              <div class="md-subhead">Constitution:</div>
              <div id="under-sub">{{ mostro.constitution }}</div>
              <br />
              <div class="md-subhead">Intelligence:</div>
              <div id="under-sub">{{ mostro.intelligence }}</div>
              <br />
              <div class="md-subhead">Charisma:</div>
              <div id="under-sub">{{ mostro.charisma }}</div>
              <br />
              <div class="md-subhead">Wisdom:</div>
              <div id="under-sub">{{ mostro.wisdom }}</div>
            </div>
          </div>
          <br />
          <md-card-actions>
            <md-button id="btncrea">
              <router-link to="/creaPersonaggio" id="routerlink"
                >Crea il tuo personaggio</router-link
              >
            </md-button>
          </md-card-actions>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import api from "../api";

export default {
  data: function () {
    return {
      mostro: {},
    };
  },
  created: function () {
    api.getMostro(this.$route.params.id).then((data) => {
      this.mostro = data.data;
    });
  },
};
</script>


<style lang="scss" scoped>
.md-card {
  display: inline-block;
  padding: 30px;
  max-height: 1500px;
  width: 800px;
  margin-top: 30px;
  margin-bottom: 30px;
  border-radius: 5px;
}

.md-subhead {
  font-size: 15.7pt;
  line-height: 27px;
  font-weight: bolder;
  color: white;
  line-height: 30px;
}

.md-title {
  text-shadow: 1px 1px 8px #000086;
  font-weight: bolder;
  font-size: 22pt;
}
.md-divider {
  margin-bottom: 5px;
}

#under-sub {
  font-size: 12.7pt;
  line-height: 30px;
  color: whitesmoke;
}

#imgMostro {
  height: 210px;
  width: auto;
  border-radius: 5px;
}
</style>