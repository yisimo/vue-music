<template>
  <div class="search">
    <div class="search-box-wrapper">
      <search-box ref="searchBox" @query="onQueryChange"></search-box>
    </div>
    <div class="shortcut-wrapper" v-show="!query">
      <div class="shortcut">
        <div class="hot-key">
          <h1 class="title">热门搜索</h1>
          <ul>
            <li @click="addQuery(item.k)" v-for="item in hotKey" class="item">{{ item.k }}</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="suggest-result" v-show="query">
      <suggest @listScroll="blurInput" :query="query"></suggest>
    </div>
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import SearchBox from '../../base/search-box/search-box.vue'
  import {getHotKey} from '../../api/search'
  import {ERR_OK} from '../../api/config'
  import Suggest from '../suggest/suggest.vue'

  export default {
    data() {
      return {
        hotKey: [],
        query: ''
      }
    },
    components: {
      SearchBox,
      Suggest
    },
    created() {
      this._getHotKey()
    },
    methods: {
      addQuery(query) {
        this.$refs.searchBox.setQuery(query)
      },
      onQueryChange(query) {
        this.query = query
      },
      blurInput() {
        this.$refs.searchBox.blur()
      },
      _getHotKey() {
        getHotKey().then((res) => {
          if (res.code === ERR_OK) {
            this.hotKey = res.data.hotkey.slice(0, 10)
          }
        })
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/variable.styl'

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
    .suggest-result
      position: fixed
      top: 178px
      bottom: 0
      width: 100%
</style>
