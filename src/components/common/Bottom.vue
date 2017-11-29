<template>
  <div class="row">
    <div class="col-md-12">
      <div class="box">
        <router-link :to="{name: 'index'}">&copy; 2016 - 2017</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .box {
    height: 40px;
    line-height: 40px;
    text-align: center;
    background-color: #f7f7f7;
    color: gray;
  }

  .box a {
    color: #555;
    text-decoration: none;
  }
</style>
