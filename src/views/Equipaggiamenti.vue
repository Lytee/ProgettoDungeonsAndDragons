<template>
  <div class="equipaggiamenti">
    <div class="goBack">
      <router-link to="/" id="routerlink">
        <md-icon>arrow_back</md-icon>&nbsp;
        <label>Torna indietro</label>
      </router-link>
      <h2 align="center" id="title">Equipaggiamenti</h2>
      <div
        class="md-layout md-gutter md-alignment-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <form class="form-inline">
          <md-field class="search" align="center">
            <label>Cerca</label>
            <md-input
              placeholder="Cerca un equipaggiamento..."
              v-model="cerca"
              v-on:input="currentpage = 1"
            ></md-input>
            <md-button class="md-icon-button md-primary">
              <md-icon>search</md-icon>
            </md-button>
          </md-field>
        </form>
      </div>
      <div
        class="md-layout md-gutter md-alignment-top-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <pagcomp
          :cat="categoria"
          :pag="currentpage"
          :search="cerca"
          v-model="paginetotali"
          :key="currentpage + cerca"
        ></pagcomp>
      </div>

      <div
        class="md-layout md-gutter md-alignment-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
        align="center"
      >
        <buttoncomp
          :pag="currentpage"
          :pagine="paginetotali"
          v-model="currentpage"
          :key="currentpage + cerca"
        ></buttoncomp>
      </div>
    </div>
  </div>
</template>

<script>
import pagcomp from "../components/pagcomp.vue";
import buttoncomp from "../components/buttoncomp.vue";

export default {
  components: {
    pagcomp,
    buttoncomp,
  },
  data: function () {
    return {
      equipaggiamenti: [],
      cerca: "",
      num: 20,
      currentpage: 1,
      paginetotali: 1,
      categoria: "equipment",
    };
  },
};
</script>


<style lang="scss" scoped>
#title {
  font-size: 22pt;
  font-weight: bolder;
  text-shadow: 1px 1px 8px #000086;
}

#title {
  font-size: 22pt;
  font-weight: bolder;
  text-shadow: 1px 1px 8px #000086;
}

.md-input {
  color: white;
}
</style>