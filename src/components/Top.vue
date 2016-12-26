<template>
  <div class="box">
    <div class="left"><router-link :to="{name: 'index'}">V2EX Clone</router-link></div>
    <div class="right">
      <ul>
        <li v-for="item in tabs">
          <router-link :class="{curTab: item.key === curTab}" :to="{name: item.key}">{{ item.value }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      curTab: 'index',
      tabs: [
        {key: 'index', value: '首页'},
        {key: 'register', value: '注册'},
        {key: 'login', value: '登录'}
      ]
    }
  },

  watch: {
    // 监听路由变化，改变 curTab 值
    '$route': function() {
      let tab = this.$route.name;
      // console.log(tab)

      // 防止切换到 Member 等组件时，失去顶部路由标志
      if (['index', 'register', 'login'].indexOf(tab) !== -1)
        this.curTab = tab;
    }
  },

  created: function() {
    let tab = this.$route.name;
    // console.log(tab)
    this.curTab = tab;
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

  .curTab {
    color: white !important;
    background-color: #555;
    border: 1px solid #555;
    border-radius: 10px;
    padding: 5px;
  }
</style>
