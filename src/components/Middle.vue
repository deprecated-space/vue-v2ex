<template>
  <div class="box">
    <router-view></router-view>
    <right></right>
  </div>
</template>

<script>
import Index from "./Index.vue";
import Right from "./Right.vue";

export default {
  data () {
    return {
    }
  },

  components: {
    Index, Right
  }
}
</script>

<style scoped>
  .box {
    overflow: hidden;
    margin-bottom: 40px;
  }
</style>
