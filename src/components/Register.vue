<template>
  <div class="box">
    <div class="header">
      v2ex - 注册
    </div>
    <div class="inner">
      用户名<input type="text" /><br/>
      密码<input type="text" /><br/>
      电子邮件<input type="text" /><br/>
      <input type="button" value="注册" />
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
    /*float:left;*/
    /*height: 700px;*/
   /* width: 700px;
    background: rgb(250, 250, 250);*/
    padding: 10px;
  }

  .box .header {
    padding: 10px;
    font-size: 14px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
    overflow: auto;
  }

  .box .inner {
    padding: 10px;
  }

  .box .inner input[type="text"] {
    margin-left: 10px;
    margin-bottom: 10px;
  }
</style>
