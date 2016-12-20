<template>
  <div class="box">
    <!-- 根据路由渲染的部分 -->
    <div class="left">
      <router-view></router-view>
    </div>
    <right class="right"></right>
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

  .box .left {
    /*max-width: 700px;*/
    width: 700px;
    background: rgb(250, 250, 250);
    float: left;
    /*margin-right: -300px;*/
  }

  .box .right {
    width: 250px;
    float: right;
    margin-bottom: 40px;
  }

  @media (max-width: 700px) {
    .right {
      display: none;
    }
  }
</style>
