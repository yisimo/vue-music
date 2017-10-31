<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bgImage"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from '../music-list/music-list.vue'
  import {mapGetters} from 'vuex'
  export default {
    data() {
      return {
        songs: []
      }
    },
    components: {
      MusicList
    },
    computed: {
      title() {
        return this.topList.topTitle
      },
      bgImage() {
        return this.topList.picUrl
      },
      ...mapGetters([
        'topList'
      ])
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s ease
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
