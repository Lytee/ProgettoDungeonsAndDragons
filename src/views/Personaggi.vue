<template>
  <div class="personaggi">
    <div class="goBack">
      <router-link to="/" id="routerlink">
        <md-icon>arrow_back</md-icon>&nbsp;
        <label>Torna indietro</label>
      </router-link>
      <h2 align="center" id="title">LOGIN</h2>
      <md-divider></md-divider>
      <div class="md-layout md-gutter md-alignment-center">
        <md-card
          class="md-elevation-2 md-medium-size-33 md-small-size-66 md-xsmall-size-100"
        >
          <md-card-content>
            <md-empty-state
              md-icon="person_pin"
              md-label="Oops..."
              md-description="Inserisci il tuo User ID o creane uno nuovo per dare vita ai tuoi personaggi!"
            >
              <md-card-expand>
                <md-card-actions>
                  <span class="center-span">
                    <md-card-expand-trigger>
                      <md-button class="md-raised md-primary"
                        >Inserisci il tuo User ID</md-button
                      >
                    </md-card-expand-trigger>
                  </span>
                </md-card-actions>
                <md-card-expand-content>
                  <md-card-content>
                    <md-field>
                      <label>User ID</label>
                      <md-input v-model="username"></md-input>
                    </md-field>
                    <md-button
                      v-if="username"
                      class="md-raised md-primary"
                      @click="checkUser()"
                      >Continua</md-button
                    >
                    <md-button
                      v-else
                      class="md-raised md-primary"
                      @click="noUser()"
                      >Continua</md-button
                    >
                  </md-card-content>
                </md-card-expand-content>
              </md-card-expand>
            </md-empty-state>
          </md-card-content>
        </md-card>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from "../database";
export default {
  data: function () {
    return {
      username: this.$cookies.get("username"),
    };
  },
  methods: {
    noUser() {
      alert("inserisci username!");
    },
    checkUser() {
      return db
        .collection("users")
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            if (doc.data().username !== this.username) {
              this.$cookies.set("username", this.username);
              this.$router
                .replace({ path: "/creapersonaggio" })
                .catch(() => {});
            } else if (doc.data().username === this.username) {
              this.$cookies.set("username", this.username);
              this.$router
                .replace({ path: "/imieipersonaggi" })
                .catch(() => {});
            }
          });
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 600px;
  margin-bottom: 20px;
  margin-top: 40px;
  display: inline-block;
  border-radius: 5px;
}
.md-title {
  font-size: 20pt;
  font-weight: bolder;
  text-shadow: 1px 1px 8px #000086;
}
.md-title1 {
  font-size: 11pt;
  margin-left: 5px;
}
.md-subhead {
  font-size: 10.2pt;
}
.md-subhead {
  font-size: 12pt;
}
.center-span {
  text-align: center;
  margin-left: auto;
  margin-right: auto;
}

#routerlink {
  color: whitesmoke;
}
#title {
  font-size: 20pt;
  font-weight: bolder;
  text-shadow: 1px 1px 8px #000086;
}
#background {
  background-image: url("https://midianrealms.altervista.org/Blog/wp-content/uploads/2015/04/leilon.jpg?w=640");
  background-position: center top;
  background-repeat: space;
  background-size: cover;
  height: 800px;
}
</style>