 <template>
  <div class="page-container">
    <md-app md-mode="overlap" style="min-height: 100vh" :key="$route.fullPath">
      <md-app-toolbar
        class="md-primary md-large md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <div class="md-toolbar-row">
          <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
            <md-icon>menu</md-icon>
          </md-button>

          <router-link to="/">
            <img src="../assets/icon1.png" class="logo" />
          </router-link>

          <span class="md-title">D&D Master Guide</span>

          <div v-if="username" class="md-toolbar-section-end">
            <label :key="username">Benvenuto, {{ username }}</label>

            <md-button @click="deleteUser(), reloadPage()">Logout</md-button>
          </div>
          <div v-else class="md-toolbar-section-end"></div>
        </div>
      </md-app-toolbar>

      <md-app-drawer :md-active.sync="menuVisible" id="nav">
        <md-toolbar
          class="md-transparent md-medium-size-33 md-small-size-50 md-xsmall-size-100"
          md-elevation="0"
        >
          <span>Menù</span>
          <div class="md-toolbar-section-end">
            <md-button class="md-icon-button md-dense" @click="toggleMenu">
              <md-icon>keyboard_arrow_left</md-icon>
            </md-button>
          </div>
        </md-toolbar>

        <md-list>
          <router-link to="/" id="routerlink">
            <md-list-item>
              <md-icon>home</md-icon>
              <span class="md-list-item-text" id="routerlink">Home</span>
            </md-list-item>
          </router-link>

          <div v-if="username">
            <router-link to="/creapersonaggio" id="routerlink">
              <md-list-item>
                <md-icon>add</md-icon>
                <span class="md-list-item-text" id="routerlink">Crea</span>
              </md-list-item>
            </router-link>
          </div>
          <div v-else>
            <router-link to="/personaggi" id="routerlink">
              <md-list-item>
                <md-icon>add</md-icon>
                <span class="md-list-item-text" id="routerlink">Crea</span>
              </md-list-item>
            </router-link>
          </div>  

          <router-link to="/personaggi" id="routerlink">
            <md-list-item v-if="!username">
              <md-icon>favorite</md-icon>
              <span class="md-list-item-text" id="routerlink"
                >I miei personaggi</span
              >
            </md-list-item>
          </router-link>

          <router-link to="/imieipersonaggi" id="routerlink">
            <md-list-item v-if="username">
              <md-icon>favorite</md-icon>
              <span class="md-list-item-text" id="routerlink"
                >I miei personaggi</span
              >
            </md-list-item>
          </router-link>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view />
      </md-app-content>
    </md-app>
  </div>
</template>

    <script>
export default {
  name: "navigationLog",

  data: function () {
    return {
      menuVisible: false,
      username: this.$cookies.get("username"),
    };
  },

  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible;
    },
    deleteUser: function () {
      this.$cookies.remove("username");
    },
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>
<style>
#app {
  font-family: "Roboto";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#routerlink {
  color: #ffffff;
}

#nav a.router-link-exact-active {
  background-color: rgba(0, 0, 0, 0.512);
}

.md-app {
  max-height: 700px;
  background-color: #5555;
  display: flex;
  flex-direction: column;
  margin: auto;
}

.md-drawer {
  width: 275px;
  max-width: calc(100vw - 125px);
  font-size: 14.8pt;
  background-image: url("https://i.imgur.com/GwbOLYX.png");
  background-position: bottom right;
  background-size: contain;
  background-repeat: no-repeat;
}

.md-list {
  margin-top: 20px;
  font-size: 13.2pt;
}

.logo {
  margin: 15px 10px 17px;
  width: 70px;
  height: 60px;
}
.md-title {
  font-size: 17.7pt;
  text-shadow: 1px 1px 8px #000086;
  font-weight: bold;
}
.md-toolbar-section-end {
  text-transform: capitalize;
}
</style>

    