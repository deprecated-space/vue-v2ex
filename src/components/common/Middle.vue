<template>
  <div class="box row">
    <!-- 根据路由渲染的部分 -->
    <!-- qa: 难道一个页面只能有一个 router-view?? -->
    <div class="left col-md-8">
      <div class="wrapper">
        <!-- 路由出口 -->
        <!-- 路由匹配到的组件将渲染在这里 -->
        <router-view></router-view>
      </div>
    </div>
    <right class="right col-md-4"></right>
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

  .box .left .wrapper {
    /*max-width: 700px;*/
    /* width: 700px; */
    background: rgb(250, 250, 250);
    padding: 15px;
    /* float: left; */
    /*margin-right: -300px;*/
  }

  .box .right {
    /* width: 250px; */
    /* width: 25%; */
    /* float: right; */
    /* margin-bottom: 40px; */
  }
</style>
