<template>
  <div class="buttoncomp">
    <div
      class="md-layout md-gutter md-medium-size-33 md-small-size-50 md-xsmall-size-100"
    >
      <div class="md-layout item" id="item1">
        <div v-if="pagine > 1">
          <div v-if="newpage > 1">
            <md-button
              v-on:click="menouno()"
              class="md-icon-button md-dense md-raised md-primary"
            >
              <md-icon>navigate_before</md-icon>
            </md-button>
          </div>
        </div>

        <div v-for="n in buttonarray" :key="n">
          <div v-if="n == pag">
            <md-button
              v-on:click="cambiapagina(n)"
              class="md-icon-button md-dense md-raised md-primary"
              id="attivo"
              >{{ n }}</md-button
            >
          </div>
          <div v-else>
            <md-button
              v-on:click="cambiapagina(n)"
              class="md-icon-button md-dense md-raised md-primary"
              >{{ n }}</md-button
            >
          </div>
        </div>

        <div v-if="newpage < pagine">
          <md-button
            v-on:click="piuuno()"
            class="md-icon-button md-dense md-raised md-primary"
          >
            <md-icon>navigate_next</md-icon>
          </md-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      newpage: this.value,
      nbuttons: 5,
      first: this.pag - 2,
    };
  },
  methods: {
    cambiapagina: function (pg) {
      this.newpage = pg;
      this.$emit("input", this.newpage);
    },
    menouno: function () {
      this.newpage--;
      this.$emit("input", this.newpage);
    },
    piuuno: function () {
      this.newpage++;
      this.$emit("input", this.newpage);
    },
  },
  props: {
    pag: {
      type: Number,
      required: true,
    },
    pagine: {
      type: Number,
      required: false,
      default: 1,
    },
    value: {
      type: Number,
      required: false,
      default: 1,
    },
  },
  computed: {
    buttonarray: function () {
      if (
        this.pagine > this.nbuttons &&
        this.pag >= 3 &&
        this.pag <= this.pagine - 2
      ) {
        let c = this.first;
        let v = [];
        for (let i = 0; i < this.nbuttons; i++) {
          v[i] = c;
          c++;
        }
        return v;
      } else if (this.pagine > this.nbuttons && this.pag < 3) {
        let c = 1;
        let v = [];
        for (let i = 0; i < this.nbuttons; i++) {
          v[i] = c;
          c++;
        }
        return v;
      } else if (this.pagine > this.nbuttons && this.pag > this.pagine - 2) {
        let c = this.pagine - this.nbuttons + 1;
        let v = [];
        for (let i = 0; i < this.nbuttons; i++) {
          v[i] = c;
          c++;
        }
        return v;
      } else if (this.pagine <= this.nbuttons) {
        let c = 1;
        let v = [];
        for (let i = 0; i < this.pagine; i++) {
          v[i] = c;
          c++;
        }
        return v;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
#attivo {
  background-color: gray;
  font-weight: bold;
}

.md-button {
  display: inline-block;
  padding: 5px;
  margin-block-start: 40px;
}
</style>