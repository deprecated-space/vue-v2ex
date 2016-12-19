<template>
  <div class="box">
    <!-- 根据路由渲染的部分 -->
    <router-view></router-view>
    <right></right>
  </div>
</template>

<script>
// 不需要引入 Index component，因为 Index 在路由中已经引入
// import Index from "./Index.vue";
import Right from "./Right.vue";

export default {
  data () {
    return {
    }
  },

  components: {
    Right
  }
}
</script>

<style scoped>
  .box {
    overflow: hidden;
    margin-bottom: 10px;
  }
</style>
