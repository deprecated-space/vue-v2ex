<template>
  <div class="box">
    <div class="cell">
      <span class="title">今日热议主题</span>
    </div>
    <div class="cell" v-for="item in data">
      <span>
        <router-link :to="{ name: 'member', params: {id: item.member.id}}">
          <img :src="item.member.avatar_mini">
        </router-link>
      </span>
      <p>
        <router-link :to="{ name: 'detail', params: {id: item.id}}">{{ item.title }}</router-link>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      api: '//www.v2ex.com/api/topics/hot.json',
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
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .box {
    background: rgb(250, 250, 250);
    margin-bottom: 20px;
    border-radius: 3px;
  }

  .cell {
    overflow: hidden;
    padding: 10px;
    font-size: 12px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
  }

  .title {
    color: #ccc;
  }

  .cell span img {
    float: left;
    margin-right: 10px;
    border-radius: 4px;
  }

  .cell p {
    overflow: hidden;
  }

  .cell p a {
    color: #555;
    text-decoration: none;
  }
</style>

