<template>
  <div class="box">
    <span><img :src="data.avatar_normal" /></span>
    <div class="user">
      <h2>{{ data.username }}</h2>
      <p>V2EX 第 {{ data.id }} 号会员, 加入于 xxx 天前</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      api: 'https://www.v2ex.com/api/members/show.json?id=',
      userId: null,
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
      this.userId = this.$route.params.id;
      // return 'hello'
    },

    getData: function() {
      this.$http.get(this.api + this.userId).then(function(res) {
        // console.log(res.data)
        this.data = res.data;
      });
    }
  }
}
</script>

<style scoped>
  .box {
    width: 700px;
    float: left;
    background: rgb(250, 250, 250);
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
