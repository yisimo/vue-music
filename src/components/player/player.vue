<template>
  <div class="player" v-show="playlist.length>0">
    <div class="normal-player" v-show="fullScreen">
      normal player
    </div>
    <div class="mini-player" v-show="!fullScreen">
      mini player
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapGetters} from 'vuex'

  export default {
    computed: {
      ...mapGetters([
        'fullScreen',
        'currentIndex',
        'playing',
        'playlist'
      ])
    },
    methods: {
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

  .player
    .normal-player
      position: fixed
      left: 0
      right: 0
      top: 0
      bottom: 0
      z-index: 150
      background: $color-background
    .mini-player
      display: flex
      align-items: center
      position: fixed
      left:0
      bottom:0
      width: 100%
      height: 60px
      z-index: 180
      background: $color-highlight-background
</style>
