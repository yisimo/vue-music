<template>
  <div class="no-result">
    <div class="no-result-icon"></div>
    <p class="no-result-text">{{ title }}</p>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    props: {
      title: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixin.styl'
  @import '../../common/stylus/variable.styl'

  .no-result
    text-align: center
    .no-result-icon
      margin: 0 auto
      width: 86px
      height: 90px
      background-size: 86px 90px
      bg-image('no-result')
    .no-result-text
      margin-top: 30px
      font-size: $font-size-medium
      color: $color-text-d
</style>
