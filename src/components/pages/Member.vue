<template>
  <div class="box">
    <template v-if="!isLoading">
      <img :src="data.avatar_normal" class="avatars-img">
      <div class="user">
        <h2 class="username">{{ data.username }}</h2>
        <!-- v-clock 的正确用法？ -->
        <p class="desc">V2EX 第 {{ data.id }} 号会员, 加入于 {{ data.created | formatDate}}</p>
      </div>
    </template>
    <template v-else>
      <div class="loading-area">
         <div class="sk-cube-grid">
           <div class="sk-cube sk-cube1"></div>
           <div class="sk-cube sk-cube2"></div>
           <div class="sk-cube sk-cube3"></div>
           <div class="sk-cube sk-cube4"></div>
           <div class="sk-cube sk-cube5"></div>
           <div class="sk-cube sk-cube6"></div>
           <div class="sk-cube sk-cube7"></div>
           <div class="sk-cube sk-cube8"></div>
           <div class="sk-cube sk-cube9"></div>
         </div>
      </div>
    </template>
  </div>
</template>

<script>
import axios from 'axios';
import 'spinkit/css/spinkit.css'

// 兼容 id & username
export default {
// module.exports =  {
  data () {
    return {
      api: '//www.v2ex.com/api/members/show.json',
      userId: null,
      key: '', // 是根据 'id' 还是 'username'
      data: null,
      isLoading: true
    }
  },

  created: function() {
    this.getUserId();
    this.getData();
  },

  methods: {
    getUserId: function() {
      // return this.$route.name;
      this.userId = this.$route.params.id; // 是 'id' 或者 'username'
      this.key = /^\d+$/.test(this.userId) ? 'id': 'username';
    },

    getData: function() {
      // let key = this.key;
      // 如果是根据 id
      let that = this;  // 注意 this

      if (this.key === 'id') {
        // test
        setTimeout(() => axios.get(this.api, {params: {id: this.userId}}).then(function(res) {
          that.data = res.data;
          that.isLoading = false;
        }), 2000);
      } else { // 根据 username
        this.$http.get(this.api, {params: {username: this.userId}}).then(function(res) {
          this.data = res.data;
        });
      }
    }
  },

  // 数据格式化
  filters: {
    dateFormat: function(timestamp) {
      let date = new Date(timestamp * 1000)
        , year = date.getFullYear()
        , month = date.getMonth() + 1
        , day = date.getDate();

      return year + '-' + month + '-' + day;
    }
  },

  watch: {
    // 组件内的路由变化，即 params 参数的变化
    '$route': function() {
      this.getUserId();
      this.getData();
    }
  }
}
</script>

<style scoped lang="scss">
  .box {
    display: flex;
    align-items: center;
    .avatars-img {
      border-radius: 4px;
      margin-right: 10px;
    }
    .username {
      margin-top: 0;
    }
    .desc {
      margin-bottom: 0;
    }
    .loading-area {
      margin: 0 auto;
    }
  }

  [v-cloak] {
    display: none;
  }
</style>
