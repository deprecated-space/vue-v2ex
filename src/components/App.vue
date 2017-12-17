<template>
  <div id="app" class="">
    <div class="global-nav">
      <div class="container">
        <top></top>
      </div>
    </div>
    <div class="container">
      <middle></middle>
      <bottom></bottom>
    </div>
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

  a {
    color: #666;
  }

  a:hover {
    color: #333;
    text-decoration: none;
  }

  .global-nav {
    background-color: #f7f7f7;
    margin-bottom: 10px;
  }
</style>