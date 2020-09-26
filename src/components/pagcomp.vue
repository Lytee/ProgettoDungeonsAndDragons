<template>
  <div class="elementi">
    <div v-if="empty == false">
      <div
        class="md-layout md-gutter md-alignment-top-center md-medium-size-33 md-small-size-50 md-xsmall-size-100"
      >
        <div v-for="elemento in elementi" :key="elemento.index">
          <router-link :to="{ name: cat, params: { id: elemento.index } }">
            <md-card md-size-66 md-with-hover>
              <md-ripple>
                <md-card-media-cover md-text-scrim>
                  <md-card-media md-ratio="16:9">
                    <img :src="require(`@/assets/background/${cat}.jpg`)">
                  </md-card-media>
                  <md-card-area>
                    <md-card-header>
                      <div class="md-title">{{elemento.name}}</div>
                    </md-card-header>
                  </md-card-area>
                </md-card-media-cover>
              </md-ripple>
            </md-card>
          </router-link>
        </div>
      </div>
    </div>
    <div v-else>Non ci sono elementi corrispondenti ai criteri di ricerca</div>
  </div>
</template>

<script>
import api from "../api";

export default {
  data: function() {
    return {
      elementi: [],
      num: 18,
      empty: Boolean,
      pagina: this.pag,
      tot: this.value
    };
  },
  props: {
    cat: {
      type: String,
      required: true
    },
    pag: {
      type: Number,
      required: false,
      default: 1
    },
    search: {
      type: String,
      required: false,
      default: ""
    },
    value: {
      type: Number,
      required: false,
      default: 1
    }
  },
  created: function() {
    api.getCategoria(this.cat, this.search).then(data => {
      let v = data.data.results;
      let v2 = [];
      let c = 0;
      let j = 0;
      while (c < v.length) {
        j = j + 1;
        let o = {};
        let vt = [];
        for (let i = 0; i < this.num; i++) {
          if (c >= v.length) {
            break;
          }
          vt.push(v[c]);
          c = c + 1;
        }
        o.pageid = j;
        o.elements = vt;
        v2.push(o);
      }
      this.tot = v2.length;
      this.$emit("input", this.tot);
      if (v2.length >= 1) {
        this.empty = false;
        this.elementi = v2[this.pagina - 1].elements;
      } else {
        this.empty = true;
      }
    });
  }
};
</script>

<style lang="scss" scoped>
.md-card {
  width: 320px;
  height: 180px;
  margin: 60px;
  padding: 4px;
  margin-block-start: 50px;
  background-color: rgba(0, 0, 0, 0.266);
  display: inline-block;
}

.md-title {
  text-shadow: 1px 1px 8px #000086;
  font-weight: bolder;
  font-size: 18pt;
}
</style>