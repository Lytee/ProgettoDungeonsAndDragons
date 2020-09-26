<template>
  <div class="page-container">
    <navigationLog :key="$route.fullPath"/>
  </div>
</template>


<script>
import navigationLog from "./components/NavigationLog.vue";

export default {
  name: "app",
  components: {
    navigationLog
  },
  data: function() {
    return {
      username: this.$cookies.get("username")
    };
  }
};
</script>


