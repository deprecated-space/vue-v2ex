<template>
  <div class="box">
    <v2ex></v2ex>
    <hot></hot>
    <description></description>
  </div>
</template>

<script>
import V2ex from "./V2ex.vue";
import Hot from "./Hot.vue";
import Description from "./Description.vue";

export default {
  data () {
    return {
    }
  },

  components: {
    V2ex, Hot, Description
  }
}
</script>

<style scoped>
  .box {
    /* width: 250px;  */
    /* width: 25%; */
    /* float: right; */
    /*margin-bottom: 40px;*/
  }
</style>
