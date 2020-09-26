<template>
  <div class="equipaggiamento">
    <div class="goBack">
      <router-link to="/equipaggiamenti" id="routerlink">
        <md-icon>arrow_back</md-icon>&nbsp;
        <label>Torna indietro</label>
      </router-link>

      <div class="md-layout md-gutter md-alignment-top-center">
        <md-card class="md-accent md-elevation-5">
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ equipaggiamento.name }}</div>
              <br />
              <md-divider></md-divider>
            </md-card-header-text>
          </md-card-header>
          <md-card-media md-big align="center">
            <img
              :src="
                require(`@/assets/equipaggiamenti.Categorie/${equipaggiamento.equipment_category.name.replace(
                  /\s/g,
                  ''
                )}.jpg`)
              "
              :alt="equipaggiamento.equipment_category.name.replace(/\s/g, '')"
              id="imgEquipaggiamento"
            />
          </md-card-media>
          <br />
          <md-divider></md-divider>
          <md-card-content align="center">
            <div
              v-if="desc == true"
              class="md-layout md-gutter md-alignment-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
            >
              <div class="md-subhead">Descrizione:</div>
              <div
                v-for="parte in equipaggiamento.desc"
                :key="parte"
                id="under-sub"
              >
                {{ parte }}
              </div>
            </div>
            <br />
            <div class="md-subhead">Categoria equipaggimento:</div>
            <div id="under-sub">
              {{ equipaggiamento.equipment_category.name }}
            </div>
            <div v-if="weapon == true">
              <br />
              <div class="md-subhead">Weapon category:</div>
              <div id="under-sub">{{ equipaggiamento.weapon_category }}</div>
              <br />
              <div class="md-subhead">Range:</div>
              <div id="under-sub">
                {{ equipaggiamento.weapon_range }} ({{
                  equipaggiamento.range.normal
                }}
                ft.)
              </div>
              <br />
              <div class="md-subhead">Damage:</div>
              <div id="under-sub">
                {{ equipaggiamento.damage.damage_dice }}
                {{ equipaggiamento.damage.damage_type.name }}
              </div>
              <div v-if="properties == true">
                <br />
                <div class="md-subhead">Properties:</div>
                <div
                  v-for="prp in equipaggiamento.properties"
                  :key="prp.index"
                  id="under-sub"
                >
                  <li>{{ prp.name }}</li>
                </div>
              </div>
            </div>
            <br />
            <div class="md-subhead">Cost:</div>
            <div id="under-sub">
              {{ equipaggiamento.cost.quantity }}
              {{ equipaggiamento.cost.unit }}
            </div>
            <br />
            <div class="md-subhead">Weight:</div>
            <div id="under-sub">{{ equipaggiamento.weight }} lb.</div>
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
      equipaggiamento: {},
      weapon: Boolean,
      properties: Boolean,
      desc: Boolean,
    };
  },
  created: function () {
    api.getEquipaggiamento(this.$route.params.id).then((data) => {
      this.equipaggiamento = data.data;
      if (data.data.equipment_category.index === "weapon") {
        this.weapon = true;
        if (data.data.properties.length >= 1) {
          this.properties = true;
        }
      } else {
        this.weapon = false;
        this.properties = false;
      }

      if (Object.getOwnPropertyNames(data.data).includes("desc") === true) {
        this.desc = true;
      } else {
        this.desc = false;
      }
    });
  },
};
</script>


<style lang="scss" scoped>
.md-card {
  display: inline-block;
  width: 900px;
  max-height: 2000px;
  margin-block-start: 40px;
  border-radius: 5px;
  padding: 25px;
  margin-bottom: 30px;
}

.md-title {
  text-shadow: 1px 1px 8px #000086;
  font-weight: bolder;
  font-size: 22pt;
}

.md-card-content {
  vertical-align: top;
}

.md-subhead {
  font-size: 15.7pt;
  line-height: 30px;
  font-weight: bolder;
  color: white;
}

#under-sub {
  font-size: 12.7pt;
  line-height: 25px;
  color: whitesmoke;
}

#imgEquipaggiamento {
  width: 210px;
  height: auto;
  border-radius: 5px;
  margin: 15px;
}
#item1 {
  margin-left: 30px;
}
</style>