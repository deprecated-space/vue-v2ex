<template>
  <div class="box">
    <div class="cell">
      <h5>V2EX = way to explore</h5>
      <div class="sep5"></div>
      <span class="title">V2EX 是一个关于分享和探索的地方</span>
    </div>
    <div class="inner">
      <router-link :to="{name: 'register'}"><input type="button" class="btn btn-default btn-sm" value="现在注册" /></router-link>
      <div class="sep5"></div>
      <div>已注册用户请<router-link :to="{name: 'login'}"> 登录</router-link></div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .box {
    background: rgb(250, 250, 250);
    margin-bottom: 20px;
    border-radius: 3px;
    font-size: 12px;
  }

  .box .cell {
    padding: 10px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
    text-align: center;
  }

  .sep5 {
    height: 10px;
  }

  .title {
    color: #ccc;
  }

  .inner {
    padding: 10px;
    line-height: 150%;
    text-align: center;
  }

  .inner [type="button"] {
    padding: 5px;
  }
</style>
