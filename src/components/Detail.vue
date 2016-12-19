<template>
  <div class="box">
    <h1>{{ data.title }}</h1>
    <p v-html="rawHtml"></p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      api: 'https://www.v2ex.com/api/topics/show.json?id=',
      detailedId: null,
      rawHtml: '',
      data: {}
    }
  },

  mounted: function() {
    this.getDetailedId();
    this.getData();
  },

  methods: {
    getDetailedId: function() {
      this.detailedId = this.$route.params.id;
    },

    getData: function() {
      this.$http.get(this.api + this.detailedId).then(function(res) {
        this.data = res.data[0];
        this.rawHtml = this.data.content_rendered;
      })
    }
  }
}
</script>

<style scoped>
  .box {
    width: 700px;
    float: left;
    background: rgb(250, 250, 250);
    padding-left: 20px;
    padding-top: 10px;
    padding-bottom: 20px;
  }

  h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 150%;
    margin: 0px 0px 10px 0px;
    padding: 0px;
  }
</style>
