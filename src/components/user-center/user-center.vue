<template>
  <transition name="slide">
    <div class="user-center">
      <div class="back" @click.stop="back">
        <i class="icon-back"></i>
      </div>
      <div class="switches-wrapper">
        <switches :switches="switches" :currentIndex="currentIndex" @switch="switchItem"></switches>
      </div>
      <div class="play-btn" @click.stop="random">
        <i class="icon-play"></i>
        <span class="text">随机播放全部</span>
      </div>
      <div class="list-wrapper" ref="listWrapper">
        <scroll ref="favoriteList" :data="favoriteList" v-if="currentIndex === 0" class="list-scroll">
          <div class="list-inner">
            <song-list :songs="favoriteList" @select="selectSong"></song-list>
          </div>
        </scroll>
        <scroll ref="playList" :data="playHistory" v-if="currentIndex === 1" class="list-scroll">
          <div class="list-inner">
            <song-list :songs="playHistory" @select="selectSong"></song-list>
          </div>
        </scroll>
      </div>
      <div class="no-result-wrapper" v-show="noResult">
        <no-result :title="noResultDesc"></no-result>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import Switches from '../../base/switches/switches.vue'
  import Scroll from '../../base/scroll/scroll.vue'
  import SongList from '../../base/song-list/song-list.vue'
  import NoResult from '../../base/no-result/no-result.vue'
  import Song from '../../common/js/song'
  import {playlistMixin} from '../../common/js/mixin'
  import {mapGetters, mapActions} from 'vuex'

  export default {
    mixins: [playlistMixin],
    data() {
      return {
        switches: [
          {name: '我喜欢的'},
          {name: '最近播放'}
        ],
        currentIndex: 0
      }
    },
    components: {
      Switches,
      Scroll,
      SongList,
      NoResult
    },
    computed: {
      noResult() {
        if (this.currentIndex === 0) {
          return !this.favoriteList.length
        } else {
          return !this.playHistory.length
        }
      },
      noResultDesc() {
        if (this.currentIndex === 0) {
          return '暂无收藏歌曲'
        } else {
          return '你还没听过歌曲'
        }
      },
      ...mapGetters([
        'playHistory',
        'favoriteList'
      ])
    },
    methods: {
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.listWrapper.style.bottom = bottom
        this.$refs.favoriteList && this.$refs.favoriteList.refresh()
        this.$refs.playList && this.$refs.playList.refresh()
      },
      back() {
        this.$router.back()
      },
      random() {
        let list = this.currentIndex === 0 ? this.favoriteList : this.playHistory
        if (list.length === 0) {
          return
        }
        list = list.map((song) => {
          return new Song(song)
        })
        this.randomPlay({
          list
        })
      },
      switchItem(index) {
        this.currentIndex = index
      },
      selectSong(song) {
        this.insertSong(new Song(song))
      },
      ...mapActions([
        'insertSong',
        'randomPlay'
      ])
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

  .user-center
    position: fixed
    top: 0
    bottom: 0
    z-index: 100
    width: 100%
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slide-leave-to
      transform: translate3d(100%, 0, 0)
    .back
      position: absolute
      top: 5px
      left: 6px
      z-index: 50
      .icon-back
        display: block
        padding: 10px
        font-size: $font-size-large-x
        color: $color-theme
    .switches-wrapper
      margin: 10px 0 30px 0
    .play-btn
      box-sizing: border-box
      width: 135px
      margin: 0 auto
      padding: 7px 0
      text-align: center
      border-radius: 100px
      border: 1px solid $color-theme
      color: $color-theme
      .icon-play
        display: inline-block
        vertical-align: middle
        margin-right: 6px
        font-size: $font-size-medium-x
      .text
        display: inline-block
        vertical-align: middle
        font-size $font-size-small
    .list-wrapper
      position: absolute
      top: 110px
      bottom: 0
      width: 100%
      .list-scroll
        height: 100%
        overflow: hidden
        .list-inner
          padding: 20px 30px
    .no-result-wrapper
      position: absolute
      width: 100%
      top: 50%
      transform: translateY(-50%)
</style>
