<template>
  <div class="box">
    <div class="cell">
      <ul>
        <li v-for="item in tabs"><router-link :class="{curTab: item.key === curTab, notCur: item.key !== curTab}" :to="{name: 'index', query: {tab: item.key}}">{{ item.value }}</router-link></li>
      </ul>
    </div>

    <template v-if="data!==null">
      <div class="cell" v-for="item in data">
        <span><router-link :to="{ name: 'member', params: {id: item.member.id}}"><img :src="item.member.avatar_normal" /></router-link></span>
        <router-link :to="{ name: 'detail', params: {id: item.id}}">{{ item.title }}</router-link>
      </div>
    </template>
    <div v-else class="noData">
      没有数据
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      api: "https://www.v2ex.com/api/topics/latest.json",
      data: null,
      curTab: 'tech',  // 当前 tab
      tabs: [
        {key: 'tech', value: '技术'},
        {key: 'creative', value: '创意'},
        {key: 'play', value: '好玩'},
        {key: 'apple', value: 'Apple'},
        {key: 'jobs', value: '酷工作'},
        {key: 'deals', value: '交易'},
        {key: 'city', value: '城市'},
        {key: 'qna', value: '问与答'},
        {key: 'hot', value: '最热'},
        {key: 'all', value: '全部'},
        {key: 'r2', value: 'R2'}
      ]
    }
  },

  mounted: function() {
    this.getData();
  },

  // 监听路由的变化，主要是 tab 页的切换
  watch: {
    '$route': function() {
      console.log(this.$route.query.tab);
      let tab = this.$route.query.tab;
      this.curTab = tab;
      // 假设只有 `技术` 和 `R2` 两个 tab 有数据
      if (tab === 'tech' || tab === 'r2' || tab === undefined)
        this.getData();
      else {
        this.data = null;
      }
    }
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
    /*width: 700px;
    background: rgb(250, 250, 250);
    float: left;*/
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
  }

  .box .cell ul li a {
    padding: 5px;
    color: #555;
    text-decoration: none;
  }

  .box .cell ul li a.notCur:hover {
    background-color: #f5f5f5;
    color: #000;
    text-decoration: none;
  }

  .curTab {
    color: white !important;
    background-color: #555;
    border: 1px solid #555;
    border-radius: 10px;
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

  .noData {
    margin: 20px;
    font-size: 20px;
  }
</style>
