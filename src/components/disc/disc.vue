<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bdImage"></music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from '../../components/music-list/music-list.vue'
  import {getSongList} from '../../api/recommend'
  import {ERR_OK} from '../../api/config'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      MusicList
    },
    created() {
      this._getSongList()
    },
    computed: {
      title() {
        return this.disc.dissname
      },
      bdImage() {
        return this.disc.imgurl
      },
      ...mapGetters([
        'disc'
      ])
    },
    methods: {
      _getSongList() {
        getSongList(this.disc.dissid).then((res) => {
          if (res.code === ERR_OK) {
            console.log(res.cdlist)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .slide-enter-active, .slide-leave-active
    transition: all 0.3s
  .slide-enter, .slide-leave-to
    transform: translate3d(100%, 0, 0)
</style>
