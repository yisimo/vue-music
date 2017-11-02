<template>
  <div class="search-box">
    <i class="icon-search"></i>
    <input type="text" class="box" :placeholder="placeholder" v-model="query">
    <i v-show="query" class="icon-dismiss" @click="clear"></i>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {
        query: ''
      }
    },
    props: {
      placeholder: {
        type: String,
        default: '搜索歌曲、歌手'
      }
    },
    methods: {
      clear() {
        this.query = ''
      }
    },
    created() {
      this.$watch('query', (newQuery) => {
        this.$emit('query', newQuery)
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  .search-box
    display: flex
    align-items: center
    box-sizing: border-box
    width: 100%
    padding: 0 6px
    height: 40px
    border-radius: 6px
    background: $color-highlight-background
    .icon-search
      font-size: 24px
      color: $color-background
    .box
      flex: 1
      margin: 0 5px
      line-height: 18px
      background: $color-highlight-background
      font-size: $font-size-medium
      color: $color-text
      &::placeholder
        color: $color-text-d
    .icon-dismiss
      font-size: 16px
      color: $color-background
</style>
