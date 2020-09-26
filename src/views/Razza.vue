<template>
  <div class="classe">
    <div class="goBack">
      <router-link to="/razze" id="routerlink">
        <md-icon>arrow_back</md-icon>&nbsp;
        <label>Torna indietro</label>
      </router-link>

      <div class="md-layout md-gutter md-alignment-center">
        <md-card
          class="md-accent md-elevation-5 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{razza.name}}</div>
              <br>
              <md-divider></md-divider>
            </md-card-header-text>
          </md-card-header>
          <md-card-media md-medium align="center">
            <img
              :src="require(`@/assets/razze/immagini/${this.$route.params.id}.png`)"
              :alt="this.$route.params.id"
              id="imgRazza"
            >
          </md-card-media>
          <br>
          <md-divider></md-divider>
          <md-card-content align="center">
            <div class="md-subhead">Ability bonuses:</div>
            <div
              v-for="bonus in razza.ability_bonuses"
              :key="bonus.index"
              id="under-sub"
            >{{bonus.name}}: +{{bonus.bonus}}</div>
            <br>
            <div class="md-subhead">Speed:</div>
            <div id="under-sub">{{razza.speed}} ft</div>
            <br>
            <div v-if="razza.traits.length > 0">
              <div class="md-subhead">Traits:</div>
              <div v-for="trait in razza.traits" :key="trait.index" id="under-sub">{{trait.name}}</div>
              <br>
            </div>
            <div v-if="razza.starting_proficiencies.length > 0">
              <div class="md-subhead">Starting proficiencies:</div>

              <div
                v-for="prof in razza.starting_proficiencies"
                :key="prof.index"
                id="under-sub"
              >{{prof.name}}</div>
              <br>
            </div>
            <div class="md-subhead">Age:</div>
            <div id="under-sub-alignment">{{razza.age}}</div>
            <br>
            <div class="md-subhead">Alignment:</div>
            <div id="under-sub-alignment">{{razza.alignment}}</div>
            <br>
            <div class="md-subhead" id="size">Size:</div>
            <div id="under-sub-description">{{razza.size_description}}</div>
            <br>
            <div class="md-subhead">Languages:</div>           
            <div
              v-for="lingua in razza.languages"
              :key="lingua.index"
              id="under-sub"
            >{{lingua.name}}</div>
            <br>
            <div id="under-sub">{{razza.language_desc}}</div>
            <br>
            <div v-if="razza.subraces.length > 0">
              <div class="md-subhead">Subraces:</div>
              <div
                v-for="subrace in razza.subraces"
                :key="subrace.index"
                id="under-sub"
              >{{subrace.name}}</div>
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button>
              <router-link to="/creaPersonaggio" id="routerlink">Crea il tuo personaggio</router-link>
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
  data: function() {
    return {
      razza: {}
    };
  },
  created: function() {
    api.getRazza(this.$route.params.id).then(data => {
      this.razza = data.data;
    });
  }
};
</script>


<style lang="scss" scoped>
.md-card {
  display: inline-block;
  width: 900px;
  max-height: 2500px;
  margin-bottom: 20px;
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
  margin-bottom: 5px;
}

.md-subhead {
  font-size: 15.7pt;
  line-height: 30px;
  font-weight: bolder;
  color: white;
  line-height: 35px;
}

.md-divider {
  margin-bottom: 2px;
}

#under-sub {
  font-size: 12.7pt;
  line-height: 27px;
  color: whitesmoke;
}
#under-sub-size {
  font-size: 12.7pt;
  color: whitesmoke;
}

#under-sub-alignment {
  font-size: 12.7pt;
  color: whitesmoke;
  margin-top: 5px;
}

#under-sub-description {
  font-size: 12.7pt;
  color: whitesmoke;
  margin-top: 5px;
}
#imgRazza {
  width: 210px;
  height: auto;
}
</style>