<template>
  <div id="app" class="container">
    <top></top>
    <middle></middle>
    <bottom></bottom>
  </div>
</template>

<script>
import Top from "./common/Top.vue";
import Middle from "./common/Middle.vue";
import Bottom from "./common/Bottom.vue";

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
  body {
    background-color: rgb(221, 221, 221);
  }
</style>