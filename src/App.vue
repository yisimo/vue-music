<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
    <player></player>
  </div>
</template>

<script>
 // import {urlParse} from './common/js/util'
  import MHeader from './components/m-header/m-header.vue'
  import Tab from './components/tab/tab.vue'
  import Recommend from './components/recommend/recommend.vue'
  import Player from './components/player/player.vue'

  export default {
    data () {
      return {
        recommend: {
        /*  id: (() => {
            let queryParam = urlParse()
            return queryParam.id
          })() */
        }
      }
    },
    created () {
    },
    components: {
      MHeader,
      Tab,
      Recommend,
      Player
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
