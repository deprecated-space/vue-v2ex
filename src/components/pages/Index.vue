<template>
  <div class="box">
    <div class="nav">
      <span v-for="item in tabs" class="nav-item">
        <router-link 
          :class="{active: item.key === curTab, notCur: item.key !== curTab}" 
          :to="{name: 'index', query: {tab: item.key}}">
            {{ item.value }}
        </router-link>
      </span>
    </div>

    <div class="list">
      <template v-if="data!==null">
        <div class="cell" v-for="item in data">
          <router-link :to="{ name: 'member', params: {id: item.member.id}}" class="post-avatars-wrapper">
            <img :src="item.member.avatar_normal" />
          </router-link>
          <router-link :to="{ name: 'detail', params: {id: item.id}}" class="post-title">{{ item.title }}</router-link>
        </div>
      </template>
      <div v-else class="empty-data">
        Sorry, 暂时没有数据
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      api: "//www.v2ex.com/api/topics/latest.json",
      data: null,
      isLoading: true,
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
  // 感觉也可以监听 A 标签的点击，不过感觉 watch 路由比较优雅，不再是 DOM 监听
  watch: {
    '$route': function() {
      // console.log(this.$route.query.tab);
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

<style scoped lang="scss">
  // 头部导航
  .nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    border-bottom: 1px solid #e2e2e2;
    padding: 5px 15px 10px;
    .nav-item {
      min-width: 40px;
      margin: 5px;
      a {
        padding: 3px 8px;
        color: #666;
        text-decoration: none;
        &:hover {
          color: #333;
        }
        &.active {
          color: white !important;
          background-color: #555;
          border: 1px solid #555;
          border-radius: 4px;
        }
      }
    }
  }

  // list 详情
  .list .cell {
    padding: 10px;
    border-bottom: 1px solid #e2e2e2;
    display: flex;

    .post-avatars-wrapper {
      margin-right: 15px;
      img {
        border-radius: 4px;
      }
    }

    .post-title {
      text-decoration: none;
      overflow: hidden;
    }
  }

  .empty-data {
    padding: 10px;
    font-size: 22px;
  }
</style>