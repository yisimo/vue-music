<template>
  <transition name="slide">
    <div class="add-song" v-show="showFlag" @click.stop>
      <div class="header">
        <h1 class="title">添加歌曲到列表</h1>
        <div class="close" @click="hide">
          <i class="icon-close"></i>
        </div>
      </div>
      <div class="search-box-wrapper">
        <search-box @query="onQueryChange" placeholder="搜索歌曲"></search-box>
      </div>
      <div class="shortcut" v-show="!query">
      </div>
      <div class="search-result" v-show="query">
        <suggest :query="query" :showSinger="showSinger" @select="selectSuggest"></suggest>
      </div>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
  import SearchBox from '../../base/search-box/search-box.vue'
  import Suggest from '../../components/suggest/suggest.vue'
  import {searchMixin} from '../../common/js/mixin'

  export default {
    mixins: [searchMixin],
    data() {
      return {
        showFlag: false,
        showSinger: false
      }
    },
    components: {
      SearchBox,
      Suggest
    },
    methods: {
      show() {
        this.showFlag = true
      },
      hide() {
        this.showFlag = false
      },
      selectSuggest() {
        this.saveSearch()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

  .add-song
    position: fixed
    top: 0
    bottom: 0
    width: 100%
    z-index: 200
    background: $color-background
    &.slide-enter-active, &.slide-leave-active
      transition: all 0.3s
    &.slide-enter, &.slider-leave-to
      transform: translate3d(100%, 0, 0)
    .header
      position: relative
      height: 44px
      text-align: center
      .title
        line-height: 44px
        font-size: $font-size-large
        color: $color-text
      .close
        position: absolute
        top: 0
        right: 8px
        .icon-close
          display: block
          padding: 12px
          font-size: 20px
          color: $color-theme
    .search-box-wrapper
      margin: 20px
    .search-result
      position fixed
      top: 124px
      bottom: 0
      width: 100%
</style>
