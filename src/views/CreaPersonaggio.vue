<template>
  <div class="creapersonaggio">
    <div v-if="username">
      <md-steppers md-alternative :md-active-step.sync="active" md-linear>
        <md-step
          id="first"
          md-label="Dati generali"
          md-description="Richiesto"
          :md-done.sync="first"
          class="md-elevation-8"
        >
          <div
            class="md-layout md-gutter md-alignment-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
          >
            <md-card id="cardstep" class="md-elevation-4">
              <md-card-content>
                <md-field>
                  <label for="username">Il tuo user ID</label>
                  <md-input v-model="username" md-dense required></md-input>
                </md-field>

                <md-field>
                  <label for="nome">Nome personaggio</label>
                  <md-input
                    v-model="nome"
                    md-counter="20"
                    md-dense
                    required
                  ></md-input>
                </md-field>

                <md-field>
                  <label for="sesso">Sesso</label>
                  <md-select
                    name="sesso"
                    id="sesso"
                    v-model="sesso"
                    md-dense
                    required
                  >
                    <md-option value="Maschio">
                      <div class="md-layout">
                        <div class="md-layout-item">
                          &nbsp;
                          <img
                            :src="require(`@/assets/male.png`)"
                            alt="Maschio"
                            id="imgRazza"
                          />
                        </div>

                        <div class="md-layout" id="item1" align="right">
                          <br />
                          <span>Maschio</span>
                        </div>
                      </div>
                    </md-option>
                    <md-divider class="md-inset"></md-divider>
                    <md-option value="Femmina">
                      <div class="md-layout">
                        <div class="md-layout-item">
                          &nbsp;
                          <img
                            :src="require(`@/assets/female.png`)"
                            alt="Femmina"
                            id="imgRazza"
                          />
                        </div>

                        <div class="md-layout" id="item1" align="right">
                          <span>Femmina</span>
                        </div>
                      </div>
                    </md-option>
                  </md-select>
                </md-field>

                <md-field>
                  <label for="razza">Razza</label>
                  <md-select v-model="selectedRazza" required>
                    <md-option disabled value>Seleziona una razza</md-option>
                    <md-option
                      v-for="razza in razze"
                      :value="razza.index"
                      :key="razza.index"
                    >
                      <div class="md-layout">
                        <div class="md-layout-item">
                          <img
                            :src="
                              require(`@/assets/razze/immagini/${razza.name.toLowerCase()}.png`)
                            "
                            :alt="razza.name"
                            id="imgRazza"
                          />
                        </div>
                        <div class="md-layout-item" id="item1" align="right">
                          <span>{{ razza.name }}</span>
                        </div>
                      </div>
                      <md-divider class="md-inset"></md-divider>
                    </md-option>
                  </md-select>
                </md-field>
              </md-card-content>
              <md-card-actions>
                <md-button
                  class="md-raised md-primary"
                  id="btn"
                  @click="checkStep1('first', 'second')"
                  >Continua</md-button
                >
              </md-card-actions>
            </md-card>
          </div>
        </md-step>

        <md-step
          id="second"
          md-label="Caratteristiche"
          md-description="Richiesto"
          :md-done.sync="second"
        >
          <br />
          <div
            class="md-layout md-gutter md-alignment-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
          >
            <md-card id="cardstep">
              <md-card-content>
                <md-field>
                  <label for="classe">Classe</label>
                  <md-select v-model="selectedClasse" md-dense>
                    <md-option disabled value>Seleziona una Classe</md-option>
                    <md-option
                      v-for="classe in classi"
                      :value="classe.index"
                      :key="classe.index"
                    >
                      <div class="md-layout">
                        <div class="md-layout-item">
                          <img
                            :src="
                              require(`@/assets/classi/icone/${classe.name.toLowerCase()}.jpeg`)
                            "
                            :alt="classe.name"
                            id="imgClasse"
                          />
                        </div>
                        <div class="md-layout-item" id="item1" align="right">
                          <span>{{ classe.name }}</span>
                        </div>
                      </div>
                      <md-divider class="md-inset"></md-divider>
                    </md-option>
                  </md-select>
                </md-field>
                <br />
                <md-field>
                  <label for="Equipaggiamento">Equipaggiamento</label>
                  <md-select
                    name="equipaggiamento"
                    id="equipaggiamento"
                    v-model="selectedEquipaggiamento"
                    md-dense
                  >
                    <md-option disabled value
                      >Seleziona un equipaggiamento</md-option
                    >
                    <md-option
                      v-for="equipaggiamento in equipaggiamenti"
                      :value="equipaggiamento.index"
                      :key="equipaggiamento.index"
                    >
                      {{ equipaggiamento.name }}
                      <md-divider></md-divider>
                    </md-option>
                  </md-select>
                </md-field>
              </md-card-content>
              <md-card-actions>
                <md-button
                  class="md-raised md-primary"
                  @click="checkStep2('second', 'third')"
                  id="btn"
                  >Continua</md-button
                >
              </md-card-actions>
            </md-card>
          </div>
        </md-step>

        <md-step id="third" md-label="Riepilogo" :md-done.sync="third">
          <form class="form-inline" @submit.prevent="newPers(), newUser()">
            <div
              class="md-layout md-gutter md-alignment-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
            >
              <md-card id="cardstep">
                <md-card-header>
                  <div align="center" class="md-title">Riepilogo</div>
                </md-card-header>
                <md-divider></md-divider>
                <md-card-content>
                  <div
                    class="md-layout md-alignment-center md-medium-size-33 md-small-size-25 md-xsmall-size-25"
                  >
                    <div class="md-layout-item" align="center">
                      <br />
                      <div class="md-subhead">Nome:</div>
                      <div id="riepilogo-item">{{ nome }}</div>
                      <br />

                      <div class="md-subhead">Sesso:</div>
                      <div id="riepilogo-item">{{ sesso }}</div>
                      <br />
                      <div class="md-subhead">Razza:</div>
                      <div v-if="selectedRazza">
                        <img
                          :src="
                            require(`@/assets/razze/immagini/${selectedRazza}.png`)
                          "
                          :alt="selectedRazza"
                          id="imgRazzaRiepilogo"
                        />
                        &nbsp;{{ selectedRazza }}
                      </div>
                    </div>
                    <div
                      class="md-layout md-alignment-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                    >
                      <div class="md-layout-item" align="center">
                        <div class="md-subhead">Classe:</div>

                        <div
                          v-if="selectedClasse"
                          id="under-sub-caratteristiche"
                          align="center"
                        >
                          <img
                            :src="
                              require(`@/assets/classi/icone/${selectedClasse}.jpeg`)
                            "
                            :alt="selectedClasse"
                            id="imgClasseRiepilogo"
                          />
                          &nbsp;{{ selectedClasse }}
                        </div>
                        <br />
                        <div class="md-subhead">Equipaggiamento:</div>
                        <div
                          v-if="selectedEquipaggiamento"
                          id="under-sub-caratteristiche"
                        >
                          {{ selectedClasse }}
                        </div>
                      </div>
                    </div>
                  </div>
                </md-card-content>

                <md-card-actions>
                  <md-button type="submit" class="md-raised md-primary" id="btn"
                    >Crea il tuo personaggio</md-button
                  >
                </md-card-actions>
              </md-card>
            </div>
          </form>
        </md-step>
      </md-steppers>
    </div>
    <div v-else-if="!username && goToPersonaggi()"></div>
  </div>
</template>

<script>
import api from "../api";
import database from "../database";

export default {
  name: "StepperLinear",
  data: function () {
    return {
      active: "first",
      first: false,
      second: false,
      third: false,
      classi: [],
      selectedClasse: null,
      sesso: null,
      razze: [],
      selectedRazza: null,
      nome: null,
      equipaggiamenti: [],
      selectedEquipaggiamento: null,
      username: this.$cookies.get("username"),
    };
  },

  methods: {
    goToPersonaggi() {
      this.$router.replace("/personaggi");
    },
    checkStep1(id, index) {
      if (this.username === null) {
        alert("Compila tutti i campi");
      } else if (this.nome === null) {
        alert("Compila tutti i campi");
      } else if (this.sesso === null) {
        alert("Compila tutti i campi");
      } else if (this.selectedRazza === null) {
        alert("Compila tutti i campi");
      } else {
        this[id] = true;

        if (index) {
          this.active = index;
        }
      }
    },
    checkStep2(id, index) {
      if (this.selectedClasse === null) {
        alert("Compila tutti i campi");
      } else if (this.selectedEquipaggiamento === null) {
        alert("Compila tutti i campi");
      } else {
        this[id] = true;

        if (index) {
          this.active = index;
        }
      }
    },

    newPers() {
      database.newPers(
        this.nome,
        this.sesso,
        this.selectedRazza,
        this.selectedClasse,
        this.selectedEquipaggiamento,
        this.username
      );
      this.$cookies.set("username", this.username);
      console.log(this.username);
      alert("Personaggio creato!");
      this.$router.replace({ path: "/imieipersonaggi" });
    },
    newUser() {
      database.newUser(this.username);
    },

    deleteCookie: function () {
      this.$cookies.remove("username");
    },
  },

  created: function () {
    api.getClassi().then((data) => {
      this.classi = data.data.results;
    });
    api.getRazze().then((data) => {
      this.razze = data.data.results;
    });
    api.getEquipaggiamenti().then((data) => {
      this.equipaggiamenti = data.data.results;
    });
  },
};
</script>

<style lang="scss" scoped>
.md-field {
  margin-bottom: 20px;
}
.md-divider {
  margin-bottom: 5px;
  margin-top: 5px;
}

.md-title {
  text-shadow: 1px 1px 8px #000086;
  font-weight: bolder;
  font-size: 22pt;
}

.md-subhead {
  font-size: 12.7pt;
  line-height: 27px;
  font-weight: bold;
  color: whitesmoke;
  text-transform: capitalize;
}

#cardstep {
  margin-block-start: 15px;
  width: 700px;
  max-height: 650px auto;
  padding: 25px;
  display: inline-block;
  vertical-align: top;
}
#imgRazza {
  width: 35px;
  height: 35px;
}
#imgClasse {
  width: 35px;
  height: 35px;
}

#itemImgFemale {
  margin-left: -5px;
  text-transform: capitalize;
}
#under-sub-caratteristiche {
  text-transform: capitalize;
}
#riepilogo-item {
  text-transform: capitalize;
}
#imgRazzaRiepilogo {
  width: 50px;
  height: 50px;
}
#imgClasseRiepilogo {
  width: 45px;
  height: 45px;
  border-radius: 5px;
}
#item1 {
  margin-top: 10px;
}
#option {
  width: 200px;
}
</style>