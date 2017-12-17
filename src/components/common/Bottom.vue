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
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    background-color: #f7f7f7;
    color: gray;
  }
</style>
