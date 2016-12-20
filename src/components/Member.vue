<template>
  <div class="box">
    <span><img :src="data.avatar_normal" /></span>
    <div class="user">
      <h2>{{ data.username }}</h2>
      <p>V2EX 第 {{ data.id }} 号会员, 加入于 {{ data.created | formatDate}}</p>
    </div>
  </div>
</template>

<script>
// 兼容 id & username
export default {
  data () {
    return {
      api: 'https://www.v2ex.com/api/members/show.json',
      userId: null,
      key: '', // 是根据 'id' 还是 'username'
      data: {}
    }
  },

  mounted: function() {
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
      if (this.key === 'id') {
        this.$http.get(this.api, {params: {id: this.userId}}).then(function(res) {
          // console.log(res.data)
          this.data = res.data;
        });
      } else { // 根据 username
        this.$http.get(this.api, {params: {username: this.userId}}).then(function(res) {
          // console.log(res.data)
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

<style scoped>
  .box {
  /*  width: 700px;
    float: left;
    background: rgb(250, 250, 250);*/
  }

  .box span {
    float: left;
    padding: 10px;
    margin-right: 10px;
  }

  .box .user {
    overflow: hidden;
    margin-top: 10px;
  }

  .box .user h2 {
    margin-bottom: 5px;
  }
</style>
