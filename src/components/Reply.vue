<template>
  <div class="box">
    <div class="cell" v-for="item of data">
      <span>
        <router-link :to="{name: 'member', params: {id: item.member.id}}"><img :src="item.member.avatar_normal" /></router-link>
      </span>
      <!-- rawHtml 连样式都不能改了？颜色能改，为什么 a 标签颜色不能改？-->
      <p v-html="item.content_rendered"></p>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    data() {
      return {
        api: 'https://www.v2ex.com/api/replies/show.json?topic_id=',
        detailedId: null,
        key: '', // 是根据 'id' 还是 ''
        // rawHtml: '',
        data: {}
      }
    },

    // 生命周期的钩子函数？
    mounted: function() {
      this.getDetailId();
      this.getData();
    },

    methods: {
      getDetailId: function() {
        this.detailedId = this.$route.params.id;
      },

      getData: function() {
        this.$http.get(this.api + this.detailedId).then(function(res) {
          this.data = res.data;
          // console.log(this.data)
        })
      }
    },

    watch: {
      '$route': function() {
        this.detailedId = this.$route.params.id;
        this.getData();
      }
    }
  }
</script>

<style scoped>
  .box {
    background: rgb(250, 250, 250);
  }

  .box .cell {
    overflow: hidden;
    padding: 10px;
    line-height: 120%;
    text-align: left;
    border-bottom: 1px solid #e2e2e2;
  }

  .cell span {
    float: left;
    margin-right: 20px;
    /*color: #555 !important;*/
    /*padding-right: 10px;*/
  }

  .cell p {
    overflow: hidden;

  }

  .box .cell p a {
    color: #555;
  }
</style>
