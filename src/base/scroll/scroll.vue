<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  export default {
    components: {
      BScroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
