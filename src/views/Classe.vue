<template>
  <div class="classe">
    <router-link to="/classi" id="routerlink">
      <md-icon>arrow_back</md-icon>&nbsp;
      <label>Torna indietro</label>
    </router-link>
    <div class="md-layout md-gutter md-alignment-top-center">
      <md-card
        class="md-accent md-elevation-5 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <md-card-header>
          <md-card-header-text>
            <div class="md-title">{{ classe.name }}</div>
            <br />
            <md-divider></md-divider>
          </md-card-header-text>
        </md-card-header>
        <md-card-media md-big align="center">
          <img
            :src="
              require(`@/assets/classi/immagini/${this.$route.params.id}.png`)
            "
            :alt="this.$route.params.id"
            id="imgClasse"
          />
        </md-card-media>
        <br />
        <md-divider></md-divider>
        <md-card-content align="center">
          <div class="md-subhead">Hit die:</div>
          <div id="under-sub">{{ classe.hit_die }}</div>
          <br />
          <div class="md-subhead">Proficiencies:</div>
          <div
            v-for="prof in classe.proficiencies"
            :key="prof.name"
            id="under-sub"
          >
            {{ prof.name }}
          </div>
          <br />
          <div class="md-subhead">Saving throws:</div>
          <div v-for="ts in classe.saving_throws" :key="ts.name" id="under-sub">
            {{ ts.name }}
          </div>

          <br />
          <div v-if="incantesimi == true">
            <div class="md-subhead">Spellcasting ability:</div>
            <div id="under-sub">{{ spellsinfo.spellcasting_ability.name }}</div>
            <div v-for="inf in spellsinfo.info" :key="inf.name">
              <br />
              <div id="under-sub">
                <b>{{ inf.name }}</b>
              </div>
              <div v-for="parte in inf.desc" :key="parte">{{ parte }}</div>
            </div>
          </div>
        </md-card-content>

        <md-card-actions>
          <md-button class="md-alignment-center">
            <router-link to="/creaPersonaggio" id="routerlink"
              >Crea il tuo personaggio</router-link
            >
          </md-button>
        </md-card-actions>
      </md-card>
    </div>

    <div class="md-layout md-gutter md-alignment-center">
      <md-table
        md-card
        class="md-elevation-5 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <md-table-row>
          <md-table-head md-numeric>Livello</md-table-head>
          <md-table-head>Prof. bonus</md-table-head>
          <md-table-head>Features</md-table-head>
        </md-table-row>

        <md-table-row v-for="livello in livelli" :key="livello._id" class="row">
          <md-table-cell md-numeric class="cellLivello">{{
            livello.level
          }}</md-table-cell>
          <md-table-cell>{{ livello.prof_bonus }}</md-table-cell>
          <md-table-cell>
            <div v-for="ft in livello.features" :key="ft.name">
              {{ ft.name }}
            </div>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
  </div>
</template>

<script>
import api from "../api";

export default {
  data: function () {
    return {
      classe: {},
      livelli: [],
      incantesimi: Boolean,
      spellsinfo: {},
    };
  },
  created: function () {
    api.getClasse(this.$route.params.id).then((data) => {
      this.classe = data.data;
      if (
        Object.getOwnPropertyNames(data.data).includes("spellcasting") === true
      ) {
        this.incantesimi = true;
        api.getSpellcasting(this.$route.params.id).then((data) => {
          this.spellsinfo = data.data;
        });
      } else {
        this.incantesimi = false;
      }
    });
    api.getLvl(this.$route.params.id).then((data) => {
      this.livelli = data.data;
    });
  },
};
</script>


<style lang="scss" scoped>
.md-table-head {
  text-align: center;
  font-size: 12.2pt;
}
.md-table {
  width: 965px;
  border-radius: 5px;
  border-spacing: 0;
  top: -5px;
}
.row {
  text-align: center;
}
.cellLivello {
  text-align: center;
  padding: 5px;
}

.md-card {
  display: inline-block;
  width: 900px;
  max-height: 2000px;
  margin-block-start: 50px;
  border-radius: 5px;
  padding: 30px;
}

.md-title {
  text-shadow: 1px 1px 8px #000086;
  font-weight: bolder;
  font-size: 22pt;
}

.md-divider {
  margin-bottom: 2px;
}

.md-subhead {
  font-size: 15.7pt;
  line-height: 27px;
  font-weight: bolder;
  color: whitesmoke;
}

#under-sub {
  font-size: 12.7pt;
  line-height: 25px;
  color: whitesmoke;
}
#imgClasse {
  width: 210px;
  height: auto;
}
</style>