<template>
  <div class="imieipersonaggi">
    <div v-if="username">
      <h2
        align="center"
        class="md-scrollbar md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        id="mainTitle"
      >
        Personaggi di {{ username }}
      </h2>
      <md-divider></md-divider>
    </div>

    <div v-else-if="!username && goToPersonaggi()"></div>
    <br />

    <div v-if="personaggi.length > 0">
      <div
        class="md-layout md-gutter md-alignment-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <div v-for="personaggio in personaggi" :key="personaggio.username">
          <md-card class="md-elevation-3">
            <md-card-header>
              <md-card-header-text>
                <div class="md-title">{{ personaggio.nome }}</div>
                <div class="md-subhead">Nome personaggio</div>
              </md-card-header-text>

              <md-card-media>
                <img
                  :src="
                    require(`@/assets/razze/immagini/${personaggio.razza}.png`)
                  "
                  :alt="personaggio.razza"
                  id="imgPersonaggio"
                />
              </md-card-media>
            </md-card-header>

            <md-card-content align="center">
              <div class="md-layout md-gutter">
                <div
                  class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                >
                  <br />
                  <div class="md-subhead">Sesso:</div>
                  <div id="under-sub">{{ personaggio.sesso }}</div>
                  <br />
                  <div class="md-subhead">Razza:</div>
                  <div id="under-sub">{{ personaggio.razza }}</div>
                </div>

                <div
                  class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100"
                >
                  <br />
                  <div class="md-subhead">Classe:</div>

                  <div id="under-sub">
                    <img
                      :src="
                        require(`@/assets/classi/icone/${personaggio.classe}.jpeg`)
                      "
                      :alt="personaggio.classe"
                      id="imgClasse"
                    />
                    &nbsp;{{ personaggio.classe }}
                  </div>
                  <br />
                  <div class="md-subhead">Equipaggiamento:</div>
                  <div id="under-sub">{{ personaggio.equipaggiamento }}</div>
                </div>
              </div>
            </md-card-content>
            <md-card-actions>
              <md-button
                class="md-icon-button md-raised md-accent"
                @click="deleteDoc(personaggio.nome)"
                id="btnElimina"
              >
                <md-icon>delete_forever</md-icon>
              </md-button>
            </md-card-actions>
            <br />
            <br />
            <br />
          </md-card>
        </div>
      </div>
    </div>
    <div v-else align="center">
      Nessun personaggio creato, per crearne uno clicca
      <router-link to="/creapersonaggio" id="routerlink">qui.</router-link>
    </div>
  </div>
</template>

<script>
import { db } from "../database";

export default {
  name: "EmptyStateBasic",
  data: function () {
    return {
      personaggi: [],
      username: this.$cookies.get("username"),
    };
  },

  created() {
    return db
      .collection("personaggi")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          if (doc.data().username === this.username) {
            this.personaggi.push(doc.data());
          }
        });
      });
  },

  methods: {
    goToPersonaggi() {
      this.$router.replace("/personaggi");
    },
    deleteDoc(nome) {
      let docDeleteId = "";
      this.personaggi = this.personaggi.filter((personaggio) => {
        return personaggio.nome !== nome;
      });
      db.collection("personaggi")
        .where("nome", "==", nome)
        .get()
        .then((query) => {
          query.docs.map((doc) => {
            docDeleteId = doc.id;
          });

          db.collection("personaggi").doc(docDeleteId).delete();
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.md-card {
  margin-bottom: 40px;
  padding: 21px;
  margin: 40px;
  border-radius: 5px;
  background-image: url("https://www.gmbinder.com/images/rCvqaHK.png");
  background-position: center;
  background-size: cover;
  display: inline-block;
  max-width: 600px;
  height: auto;
}
.md-title {
  font-size: 18pt;
  font-weight: bold;
}
.md-card-header-text {
  text-transform: uppercase;
  font-size: 15pt;
}
.md-divider {
  margin-top: 10px;
}
.md-subhead {
  margin-bottom: 5px;
  font-size: 12.8pt;
  text-transform: capitalize;
  color: whitesmoke;
}

#under-sub {
  font-size: 11.8pt;
  text-transform: capitalize;
}

#imgClasse {
  width: 38px;
  height: auto;
  border-radius: 25%;
}

#routerlink {
  color: dodgerblue;
}
#mainTitle {
  text-shadow: 1px 1px 6px #000086;
  font-weight: bolder;
  font-size: 22pt;
}
#imgPersonaggio {
  width: 110px;
  height: auto;
}
</style>
