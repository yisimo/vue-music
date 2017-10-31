<template>
  <transition name="slide">
    <music-list :title="title" :bg-image="bdImage" :songs="songs">暂无数据！</music-list>
  </transition>
</template>

<script type="text/ecmascript-6">
  import MusicList from '../../components/music-list/music-list.vue'
  import {getSongList} from '../../api/recommend'
  import {ERR_OK} from '../../api/config'
  import {createSong} from '../../common/js/song'
  import {mapGetters} from 'vuex'

  export default {
    components: {
      MusicList
    },
    data() {
      return {
        songs: []
      }
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
        if (!this.disc.dissid) {
          this.$router.push('/recommend')
          return
        }
        getSongList(this.disc.dissid).then((res) => {
          if (res.code === ERR_OK) {
            this.songs = this._normalizeSongs(res.cdlist[0].songlist)
          }
        })
      },
      _normalizeSongs(list) {
        let ret = []
        list.forEach((musicData) => {
          if (musicData.songid && musicData.albummid) {
            ret.push(createSong(musicData))
          }
        })
        return ret
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
