<template>
  <div class="box">
    <div class="cell">
      <strong>V2EX = way to explore</strong>
      <div class="sep5"></div>
      <span class="fade">V2EX 是一个关于分享和探索的地方</span>
    </div>
    <div class="inner">
      <input type="button" value="现在注册" />
      <div class="sep5"></div>
      <div>已注册用户请登录</div>
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
    /*height: 200px;*/
    width: 250px;
    background: rgb(250, 250, 250);
    /*margin-bottom: 40px;*/
  }

  .box .cell {
    padding: 10px;
    font-size: 12px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
  }

  .sep5 {
    height: 10px;
  }

  .fade {
    color: #ccc;
  }

  .inner {
    padding: 10px;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
  }
</style>
