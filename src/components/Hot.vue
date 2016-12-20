<template>
  <div class="box">
    <div class="cell">
      <span class="fade">今日热议主题</span>
    </div>
    <div class="cell" v-for="item in data">
      <span><router-link :to="{ name: 'member', params: {id: item.member.id}}"><img v-bind:src="item.member.avatar_mini" /></router-link></span>
      <p><router-link :to="{ name: 'detail', params: {id: item.id}}">{{ item.title }}</router-link></p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      api: 'https://www.v2ex.com/api/topics/hot.json',
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
        // console.log(this.data)
      })
    }
  }
}
</script>

<style scoped>
  .box {
    /*height: 100px;*/
    /*width: 250px;*/
    background: rgb(250, 250, 250);
    margin-bottom: 40px;
  }

  .cell {
    overflow: hidden;
    padding: 10px;
    font-size: 12px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
  }

  .fade {
    color: #ccc;
  }

  .cell span img {
    float: left;
    margin-right: 10px;
  }

  .cell p {
    overflow: hidden;
  }

  .cell p a {
    color: #555;
    text-decoration: none;
  }
</style>

