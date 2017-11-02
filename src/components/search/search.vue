<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box></search-box>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBox from '../../base/search-box/search-box.vue'
  export default {
    components: {
      SearchBox
    },
    data() {
      return {
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .search
    .search-box-wrapper
      margin: 20px
</style>
