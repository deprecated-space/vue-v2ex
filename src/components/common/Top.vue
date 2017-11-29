<template>
  <div class="row">
    <div class="col-md-12">
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
    line-height: 40px;
    background-color: #f7f7f7;
    margin-bottom: 10px;
  }

  .box .left {
    float: left;
    margin-left: 20px;
    font-size: 20px;
    font-weight: bold;
  }

  .box .right {
    float: right;
    margin-right: 20px;
  }

  .box ul {
    list-style-type: none;
  }

  .box ul > li {
    display: inline;
    margin: 0 5px;
  }

  .box ul > li > a {
    padding: 3px 5px;
    text-decoration: none;
    color: #444;
  }

  .box ul > li > a.curTab {
    color: white;
    background-color: #555;
    border-radius: 8px;
  }
</style>
