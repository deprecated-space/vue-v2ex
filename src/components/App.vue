<template>
  <div id="app">
    <top></top>
    <middle></middle>
    <bottom></bottom>
  </div>
</template>

<script>
import Top from "./Top.vue";
import Middle from "./Middle.vue";
import Bottom from "./Bottom.vue";

export default {
  data () {
    return {
    }
  },

  components: {
    Top, Middle, Bottom
  },

  created() {
    // if (this.$route.path === '/')
    //   this.$router.replace('/index')
  }
}
</script>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: rgb(221, 221, 221);
  }

  #app {
    max-width: 1000px;
    margin: 0 auto;
  }
</style>
