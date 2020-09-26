<template>
  <div class="incantesimo">
    <div class="goBack">
      <router-link to="/incantesimi" id="routerlink">
        <md-icon>arrow_back</md-icon>&nbsp;
        <label>Torna indietro</label>
      </router-link>

      <div class="md-layout md-gutter md-alignment-center">
        <md-card
          class="md-accent md-elevation-5 md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        >
          <md-card-header>
            <md-card-header-text>
              <div class="md-title" align="left">{{ incantesimo.name }}</div>
              <br />
              <md-divider></md-divider>
            </md-card-header-text>
          </md-card-header>
          <md-card-media md-medium align="center">
            <img
              :src="
                require(`@/assets/scuolaincantesimo/${incantesimo.school.name}.png`)
              "
              :alt="incantesimo.school.name"
              id="imgIncantesimo"
            />
          </md-card-media>
          <md-card-content>
            <div
              class="md-layout md-medium-size-33 md-small-size-50 md-xsmall-size-100"
              align="center"
            >
              <br />

              <div class="md-subhead">Descrizione:</div>
              <div
                v-for="parte in incantesimo.desc"
                :key="parte"
                id="under-sub-descrizione"
              >
                <div v-if="parte.split(' ').length <= 3">
                  <br />
                  <b>{{ parte }}</b>
                </div>
                <div v-else>{{ parte }}</div>
              </div>
              <div v-if="hl == true">
                <br />
                <div v-for="partehl in incantesimo.higher_level" :key="partehl">
                  {{ partehl }}
                </div>
                <br />
                <br />
              </div>

              <div class="md-layout-item">
                <br />
                <div class="md-subhead">Level:</div>
                <div id="under-sub">{{ incantesimo.level }}</div>
                <br />
                <br />
                <div class="md-subhead">Range:</div>
                <div id="under-sub">{{ incantesimo.range }} ft</div>
                <br />
                <br />
                <div class="md-subhead">Components:</div>
                <div
                  v-for="comp in incantesimo.components"
                  :key="comp"
                  id="under-sub"
                >
                  {{ comp }}
                </div>
                <br />
                <div v-if="materiale == true">
                  <br />
                  <div class="md-subhead">Material:</div>
                  <div id="under-sub">{{ incantesimo.material }}</div>
                  <br />
                </div>
                <br />
                <div class="md-subhead">Length:</div>
                <div id="under-sub">{{ incantesimo.duration }}</div>
                <br />
                <br />
                <div class="md-subhead">
                  Ritual:
                  <md-icon v-if="incantesimo.ritual == true">done</md-icon>
                  <md-icon v-else>clear</md-icon>
                </div>
                <br />
                <div class="md-subhead">
                  Concentration:
                  <md-icon v-if="incantesimo.concentration == true"
                    >done</md-icon
                  >
                  <md-icon v-else>clear</md-icon>
                </div>
              </div>
              <div class="md-layout-item">
                <br />
                <div v-if="atk == true">
                  <div class="md-subhead">Attack type:</div>
                  <div id="under-sub">{{ incantesimo.attack_type }}</div>
                  <br />
                  <br />
                </div>
                <div v-if="dmg == true">
                  <div class="md-subhead">Damage type:</div>
                  <div id="under-sub">
                    {{ incantesimo.damage.damage_type.name }}
                  </div>
                  <br />
                  <br />
                </div>
                <div v-if="area == true">
                  <div class="md-subhead">Area:</div>
                  <div id="under-sub">
                    {{ incantesimo.area_of_effect.size }} ft ({{
                      incantesimo.area_of_effect.type
                    }})
                  </div>
                  <br />
                  <br />
                </div>
                <div v-if="dc == true">
                  <div class="md-subhead">DC:</div>
                  <div id="under-sub">
                    {{ incantesimo.dc.dc_type.name }} (success:
                    {{ incantesimo.dc.dc_success }})
                  </div>
                  <br />
                  <br />
                </div>
                <div class="md-subhead">School:</div>
                <div id="under-sub">{{ incantesimo.school.name }}</div>
                <br />
                <br />
                <div class="md-subhead">Casting time:</div>
                <div id="under-sub">{{ incantesimo.casting_time }}</div>
                <br />
                <br />
                <div class="md-subhead">Classi:</div>
                <div v-for="classe in incantesimo.classes" :key="classe.name">
                  <router-link
                    :to="{
                      name: 'classe',
                      params: { id: classe.name.toLowerCase() },
                    }"
                    id="under-sub"
                    >{{ classe.name }}</router-link
                  >
                </div>
              </div>
            </div>
          </md-card-content>
          <md-card-actions>
            <md-button>
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
      incantesimo: {},
      materiale: Boolean,
      dmg: Boolean,
      dc: Boolean,
      atk: Boolean,
      area: Boolean,
      hl: Boolean,
    };
  },
  created: function () {
    api.getIncantesimo(this.$route.params.id).then((data) => {
      this.incantesimo = data.data;
      if (data.data.components.includes("M") === true) {
        this.materiale = true;
      } else {
        this.materiale = false;
      }
      if (Object.getOwnPropertyNames(data.data).includes("damage") === true) {
        this.dmg = true;
      } else {
        this.dmg = false;
      }
      if (
        Object.getOwnPropertyNames(data.data).includes("attack_type") === true
      ) {
        this.atk = true;
      } else {
        this.atk = false;
      }
      if (Object.getOwnPropertyNames(data.data).includes("dc") === true) {
        this.dc = true;
      } else {
        this.dc = false;
      }
      if (
        Object.getOwnPropertyNames(data.data).includes("area_of_effect") ===
        true
      ) {
        this.area = true;
      } else {
        this.area = false;
      }
      if (
        Object.getOwnPropertyNames(data.data).includes("higher_level") === true
      ) {
        this.hl = true;
      } else {
        this.hl = false;
      }
    });
  },
};
</script>


<style lang="scss" scoped>
.md-card {
  display: inline-block;
  vertical-align: top;
  padding: 30px;
  max-width: 1050px;
  margin-block-start: 40px;
  border-radius: 5px;
}
.md-subhead {
  font-size: 15.5pt;
  line-height: 30px;
  font-weight: bolder;
  color: white;
}
.md-title {
  text-shadow: 1px 1px 8px #000086;
  font-weight: bolder;
  font-size: 20pt;
}

#imgIncantesimo {
  width: 210px;
  height: auto;
  border-radius: 15px;
  padding: 7px;
}

#under-sub {
  font-size: 12.2pt;
  line-height: 27px;
  color: whitesmoke;
  text-transform: capitalize;
}
#under-sub-descrizione {
  font-size: 12.8pt;
  line-height: 27px;
  color: whitesmoke;
}
</style>