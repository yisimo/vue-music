<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div ref="shortcutWrapper" class="shortcut-wrapper" v-show="!query">
      <scroll :refreshDelay="refreshDelay" ref="shortcut" class="shortcut" :data="shortcut">
        <div>
          <div class="hot-key">
            <h1 class="title">热门搜索</h1>
            <ul>
              <li @click="addQuery(item.k)" v-for="item in hotKey" class="item">{{ item.k }}</li>
            </ul>
          </div>
          <div class="search-history" v-show="searchHistory.length">
            <h1 class="title">
              <span class="text">搜索历史</span>
              <span class="clear" @click="showConfirm">
              <i class="icon-clear"></i>
            </span>
            </h1>
            <search-list @select="addQuery" @delete="deleteSearchHistory" :searches="searchHistory"></search-list>
          </div>
        </div>
      </scroll>
    </div>
    <div ref="suggestResult" class="suggest-result" v-show="query">
      <suggest ref="suggest" @select="saveSearch" @listScroll="blurInput" :query="query"></suggest>
    </div>
    <confirm ref="confirm" @confirm="clearSearchHistory" text="是否清空搜索历史结果" confirmBtnText="清空"></confirm>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBox from '../../base/search-box/search-box.vue'
  import {getHotKey} from '../../api/search'
  import {ERR_OK} from '../../api/config'
  import Suggest from '../suggest/suggest.vue'
  import SearchList from '../../base/search-list/search-list.vue'
  import {playlistMixin, searchMixin} from '../../common/js/mixin'
  import Scroll from '../../base/scroll/scroll.vue'
  import Confirm from '../../base/confirm/confirm.vue'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    mixins: [playlistMixin, searchMixin],
    data() {
      return {
        hotKey: []
      }
    },
    components: {
      SearchBox,
      Suggest,
      SearchList,
      Scroll,
      Confirm
    },
    created() {
      this._getHotKey()
    },
    computed: {
      ...mapGetters([
        'playlist',
        'sequenceList',
        'currentSong'
      ]),
      shortcut() {
        return this.hotKey.concat(this.searchHistory)
      }
    },
    methods: {
      handlePlaylist(playlist) {
        const bottom = playlist.length > 0 ? '60px' : ''
        this.$refs.shortcutWrapper.style.bottom = bottom
        this.$refs.shortcut.refresh()
        this.$refs.suggestResult.style.bottom = bottom
        this.$refs.suggest.refresh()
      },
      showConfirm() {
        this.$refs.confirm.show()
      },
      _getHotKey() {
        getHotKey().then((res) => {
          if (res.code === ERR_OK) {
            this.hotKey = res.data.hotkey.slice(0, 10)
          }
        })
      },
      ...mapActions([
        'clearSearchHistory'
      ])
    },
    watch: {
      query(newQuery) {
        if (!newQuery) {
          setTimeout(() => {
            this.$refs.shortcut.refresh()
          }, 20)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'
  @import '../../common/stylus/mixin.styl'

  .search
    .search-box-wrapper
      margin: 20px
    .shortcut-wrapper
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
      .shortcut
        height: 100%
        overflow: hidden
        .hot-key
          margin: 0 20px 20px
          .title
            margin-bottom: 20px
            font-size: $font-size-medium
            color: $color-text-l
          .item
            display: inline-block
            padding: 5px 10px
            margin: 0 20px 10px 0
            border-radius: 6px
            background: $color-highlight-background
            font-size: $font-size-medium
            color: $color-text-d
        .search-history
          position: relative
          margin: 0 20px
          .title
            display: flex
            align-items: center
            height: 40px
            font-size: $font-size-medium
            color: $color-text-l
            .text
              flex: 1
            .clear
              extend-click()
              .icon-clear
                font-size: $font-size-medium
                color: $color-text-d
    .suggest-result
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
</style>
