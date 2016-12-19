<template>
  <div class="box">
    <p><router-link :to="{name: 'index'}">&copy;&nbsp;2016 - 2016</router-link></p>
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

  .box p a {
    color: #555;
    text-decoration: none;
  }
</style>
