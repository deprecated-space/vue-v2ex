<template>
  <div class="box">
    <div class="left"><router-link :to="{name: 'index'}">V2EX Clone</router-link></div>
    <div class="right">
      <ul>
        <li><router-link :to="{name: 'index'}">首页</router-link></li>
        <li><router-link :to="{name: 'register'}">注册</router-link></li>
        <li><router-link :to="{name: 'login'}">登录</router-link></li>
      </ul>
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
    height: 40px;
    background-color: #f7f7f7;
    margin-bottom: 20px;
  }

  .left {
    height: 40px;
    margin-left: 20px;
    line-height: 40px;
    width: 200px;
    float: left;
    font-weight: bold;
    font-size: 20px;
  }

  .right {
    height: 40px;
    margin-right: 20px;
    float: right;
  }

  .box ul {
    list-style-type: none;
  }

  .box ul > li {
    display: inline;
    line-height: 40px;
    padding: 10px;
  }

  .box ul li a {
    text-decoration: none;
    color: #444;
  }

  .left a:link {
    text-decoration: none;
    color: #fff;
  }
</style>
