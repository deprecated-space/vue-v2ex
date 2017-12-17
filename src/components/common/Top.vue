<template>
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <h3 class="left"><router-link :to="{name: 'index'}">V2EX Clone</router-link></h3>
        <div class="right">
          <ul>
            <li v-for="item in tabs">
              <router-link :class="{active: item.key === curTab}" :to="{name: item.key}">{{ item.value }}</router-link>
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

<style scoped lang="scss">
  .box {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    .left {
      font-weight: 900;
      margin: 0;
      a {
        text-decoration: none;
        &:focus {color: #337ab7}
      }
    }
    .right {
      ul {
        display: flex;
        list-style-type: none;
        margin-bottom: 0;
        > li {
          margin: 0 5px;
          > a {
            padding: 3px 5px;
            text-decoration: none;
            color: #666;
            &:hover {
              color: #333;
            }
            &.active {
              color: #fff;
              background-color: #555;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
</style>