<template>
  <div class="box">
    <div class="cell">
      <ul>
        <li><a href="javascript:;">技术</a></li>
        <li><a href="javascript:;">创意</a></li>
        <li><a href="javascript:;">好玩</a></li>
        <li><a href="javascript:;">好玩</a></li>
        <li><a href="javascript:;">好玩</a></li>
        <li><a href="javascript:;">好玩</a></li>
      </ul>
    </div>

    <div class="cell" v-for="item in data">
      <span><router-link :to="{ name: 'member', params: {id: item.member.id}}"><img :src="item.member.avatar_normal" /></router-link></span>
      <router-link :to="{ name: 'detail', params: {id: item.id}}">{{ item.title }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      api: "https://www.v2ex.com/api/topics/latest.json",
      data: null
    }
  },

  mounted: function() {
    this.getData();
  },

  methods: {
    getData: function() {
      this.$http.get(this.api).then(function(res) {
        this.data = res.data;
        // console.log(res.data)
      });
    }
  }
}
</script>

<style scoped>
  .box {
    /*height: 400px;*/
    width: 700px;
    background: rgb(250, 250, 250);
    float: left;
  }

  .box .cell {
    overflow: hidden;
    padding: 10px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
  }

  .box .cell ul {
    list-style-type: none;
  }

  .box .cell ul li {
    font-size: 14px;
    padding-right: 20px;
    display: inline;
    color: #555;
  }

  .box .cell ul li a {
    color: #555;
    text-decoration: none;
  }

  .box .cell ul li a:hover {
    background-color: #f5f5f5;
    color: #000;
    text-decoration: none;
  }

  .cell span img {
    float: left;
    margin-right: 20px;
  }

  .cell a {
    color: #555;
    text-decoration: none;
    overflow: hidden;
  }
</style>
